const TreeModel = require("./treemodel");

class Knowledge {
  currentLine: number;
  constructor() {
    this.currentLine = 0;
  }

  getWorkspaceNote() {
    return Zotero.Items.get(
      Zotero.Prefs.get("Knowledge4Zotero.mainKnowledgeID")
    );
  }

  getLinesInNote(note: ZoteroItem): string[] {
    note = note || this.getWorkspaceNote();
    if (!note) {
      return [];
    }
    let noteText: string = note.getNote();
    let containerIndex = noteText.search(/<div data-schema-version="8">/g);
    if (containerIndex != -1) {
      noteText = noteText.substring(
        containerIndex + '<div data-schema-version="8">'.length,
        noteText.length - "</div>".length
      );
    }
    let noteLines: string[] = noteText.split("\n").filter((s) => s);
    return noteLines;
  }

  getLineParentInNote(
    note: ZoteroItem,
    lineIndex: number = -1
  ): TreeModel.Node<object> {
    if (lineIndex < 0) {
      lineIndex = this.currentLine;
    }
    let nodes = this.getNoteTreeAsList(note);
    if (!nodes.length || nodes[0].model.lineIndex > lineIndex) {
      // There is no parent node
      return undefined;
    } else if (nodes[nodes.length - 1].model.lineIndex <= lineIndex) {
      return nodes[nodes.length - 1];
    } else {
      for (let i = 0; i < nodes.length - 1; i++) {
        if (
          nodes[i].model.lineIndex <= lineIndex &&
          nodes[i + 1].model.lineIndex > lineIndex
        ) {
          return nodes[i];
        }
      }
    }
  }

  addLineToNote(note: ZoteroItem, text: string, lineIndex: number) {
    note = note || this.getWorkspaceNote();
    if (!note) {
      return;
    }
    let noteLines = this.getLinesInNote(note);
    noteLines.splice(lineIndex, 0, text);
    note.setNote(`<div data-schema-version="8">${noteLines.join("\n")}</div>`);
    note.saveTx();
  }

  addSubLineToNote(note: ZoteroItem, text: string, lineIndex: number = -1) {
    if (lineIndex < 0) {
      lineIndex = this.currentLine;
    }
    let parentNode = this.getLineParentInNote(note, lineIndex);
    if (!parentNode) {
      this.addLineToNote(note, text, lineIndex);
      return;
    }
    let nodes = this.getNoteTreeAsList(note);
    let i = 0;
    for (let node of nodes) {
      if (node.model.lineIndex === parentNode.model.lineIndex) {
        break;
      }
      i++;
    }
    // Get next header line index
    i++;
    if (i >= nodes.length) {
      i = nodes.length - 1;
    }
    // Add line before next header, which is also the end of current parent header
    this.addLineToNote(note, text, nodes[i].model.lineIndex);
  }

  addLinkToNote(note: ZoteroItem, lineIndex: number, linkedNoteID: number) {
    note = note || this.getWorkspaceNote();
    if (!note) {
      return;
    }
    this.addSubLineToNote(
      note,
      `<a href="zotero://note/${linkedNoteID}" rel="noopener noreferrer nofollow">${Zotero.Items.get(
        linkedNoteID
      ).getNoteTitle()}</a>`,
      lineIndex
    );
  }

  moveHeaderLineInNote(
    note: ZoteroItem,
    currentNode: TreeModel.Node<object>,
    targetNode: TreeModel.Node<object>,
    as: "child" | "before" | "after"
  ) {
    note = note || this.getWorkspaceNote();
    if (!note || targetNode.getPath().indexOf(currentNode) >= 0) {
      return undefined;
    }

    let currentLineRange = this.getLineRangeInNoteTree(note, currentNode);
    let targetLineRange = this.getLineRangeInNoteTree(note, targetNode);
    let targetIndex = 0;
    let targetRank = 1;

    let lines = this.getLinesInNote(note);

    if (as === "child") {
      targetIndex = targetLineRange[1];
      targetRank = targetNode.model.rank === 6 ? 6 : targetNode.model.rank + 1;
    } else if (as === "before") {
      targetIndex = targetLineRange[0];
      targetRank = targetNode.model.rank;
    } else if (as === "after") {
      targetIndex = targetLineRange[1];
      targetRank = targetNode.model.rank;
    }

    if (targetIndex > currentLineRange[1]) {
      targetIndex -= currentLineRange[1] - currentLineRange[0];
    }

    let rankChange = targetRank - currentNode.model.rank;

    let movedLines = lines.splice(
      currentLineRange[0],
      currentLineRange[1] - currentLineRange[0]
    );

    let headerStartReg = new RegExp("<h[1-6]>");
    let headerStopReg = new RegExp("</h[1-6]>");
    for (let i = 0; i < movedLines.length; i++) {
      let headerStart = movedLines[i].search(headerStartReg);
      if (headerStart === -1) {
        continue;
      }
      let lineRank = parseInt(movedLines[i][headerStart + 2]) + rankChange;
      if (lineRank > 6) {
        lineRank = 6;
      } else if (lineRank < 1) {
        lineRank = 1;
      }
      movedLines[i] = movedLines[i]
        .replace(headerStartReg, `<h${lineRank}>`)
        .replace(headerStopReg, `</h${lineRank}>`);
    }
    let newLines = lines
      .slice(0, targetIndex)
      .concat(movedLines, lines.slice(targetIndex));
    note.setNote(`<div data-schema-version="8">${newLines.join("\n")}</div>`);
    note.saveTx();
  }

  getNoteTree(note: ZoteroItem): TreeModel.Node<object> {
    // See http://jnuno.com/tree-model-js
    note = note || this.getWorkspaceNote();
    if (!note) {
      return undefined;
    }
    let metadataContainer = this.parseNoteHTML(note);
    let tree = new TreeModel();
    /*
    tree-model/index.js: line 40
    TreeModel.prototype.parse = function (model) {
    var i, childCount, node;
    Annotate the line 40 of:

    // if (!(model instanceof Object)) {
    //   throw new TypeError('Model must be of type object.');
    // }
    */
    let root = tree.parse({
      id: -1,
      rank: 0,
      lineIndex: -1,
      endIndex: -1,
    });
    let id = 0;
    let currentNode = root;
    let lastNode = undefined;
    for (let i = 0; i < metadataContainer.children.length; i++) {
      let currentRank = 7;
      let lineElement = metadataContainer.children[i];
      if (lineElement.tagName[0] === "H" && lineElement.tagName.length === 2) {
        let _rank = parseInt(lineElement.tagName[1]);
        if (_rank >= 1 && _rank <= 6) {
          currentRank = _rank;
        }
        while (currentNode.model.rank >= currentRank) {
          currentNode = currentNode.parent;
        }
        if (lastNode) {
          lastNode.model.endIndex = i;
        }
        lastNode = tree.parse({
          id: id++,
          rank: currentRank,
          lineIndex: i,
          endIndex: metadataContainer.children.length,
        });
        currentNode.addChild(lastNode);
        currentNode = lastNode;
      }
    }
    return root;
  }

  getNoteTreeAsList(
    note: ZoteroItem,
    doFilter: boolean = true
  ): TreeModel.Node<object>[] {
    note = note || this.getWorkspaceNote();
    if (!note) {
      return;
    }
    return this.getNoteTree(note).all(
      (node) => !doFilter || node.model.lineIndex >= 0
    );
  }

  getLineRangeInNoteTree(
    note: ZoteroItem,
    node: TreeModel.Node<object>
  ): number[] {
    note = note || this.getWorkspaceNote();
    if (!note) {
      return;
    }
    let nodes = this.getNoteTreeAsList(note);
    let endIndex = node.model.endIndex;
    for (let i = 0; i < nodes.length; i++) {
      if (
        nodes[i].model.lineIndex >= node.model.lineIndex &&
        nodes[i].model.rank > node.model.rank
      ) {
        endIndex = nodes[i].model.endIndex;
      }
    }
    return [node.model.lineIndex, endIndex];
  }

  async getNoteMarkdown(note: ZoteroItem) {
    note = note || this.getWorkspaceNote();
    if (!note) {
      return;
    }
    let items = [note];
    let markdownFormat = {
      mode: "export",
      id: Zotero.Translators.TRANSLATOR_ID_NOTE_MARKDOWN,
    };
    // let htmlFormat = {
    //   mode: "export",
    //   id: Zotero.Translators.TRANSLATOR_ID_NOTE_HTML,
    // };
    let mdText = "";
    let done = false;
    Zotero.QuickCopy.getContentFromItems(
      items,
      markdownFormat,
      (obj, worked) => {
        if (!worked) {
          Zotero.log(Zotero.getString("fileInterface.exportError"), "warning");
          return;
        }
        mdText = obj.string.replace(/\r\n/g, "\n");
        done = true;
        // Zotero.QuickCopy.getContentFromItems(
        //   items,
        //   htmlFormat,
        //   (obj2, worked) => {
        //     if (!worked) {
        //       Zotero.log(
        //         Zotero.getString("fileInterface.exportError"),
        //         "warning"
        //       );
        //       return;
        //     }
        //     console.log(obj.string.replace(/\r\n/g, "\n"));
        //     console.log("text/html", obj2.string.replace(/\r\n/g, "\n"));
        //   }
        // );
      }
    );
    let t = 0;
    while (!done && t < 500) {
      t += 1;
      await Zotero.Promise.delay(10);
    }
    return mdText;
  }

  parseNoteHTML(note: ZoteroItem): Element {
    note = note || this.getWorkspaceNote();
    if (!note) {
      return undefined;
    }
    let noteText = note.getNote();
    if (noteText.search(/<div data-schema-version/g) === -1) {
      noteText = `<div data-schema-version="8">${noteText}\n</div>`;
    }
    let parser = Components.classes[
      "@mozilla.org/xmlextras/domparser;1"
    ].createInstance(Components.interfaces.nsIDOMParser);
    let doc = parser.parseFromString(noteText, "text/html");

    let metadataContainer: Element = doc.querySelector(
      "body > div[data-schema-version]"
    );
    return metadataContainer;
  }
}

export { Knowledge };
