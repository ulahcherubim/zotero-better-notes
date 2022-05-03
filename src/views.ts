import { AddonBase, EditorMessage } from "./base";

class AddonViews extends AddonBase {
  progressWindowIcon: object;
  editorIcon: object;
  $: any;

  constructor(parent: Knowledge4Zotero) {
    super(parent);
    this.progressWindowIcon = {
      success: "chrome://zotero/skin/tick.png",
      fail: "chrome://zotero/skin/cross.png",
      default: "chrome://Knowledge4Zotero/skin/favicon.png",
    };
    this.editorIcon = {
      addToKnowledge: `<svg t="1651124422933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3269" width="24" height="24"><path d="M896.00324 352c70.7 0 128-57.3 128-128 0-70.6-57.4-128-128-128-70.7 0-128 57.3-128 128 0 18.8 4.1 36.7 11.3 52.8 2.7 6 1.4 13.1-3.3 17.8l-24.2 24.2c-5.7 5.7-14.9 6.3-21.2 1.2-38.1-30.1-86.3-48-138.6-48-18.8 0-37.1 2.3-54.6 6.7-6.9 1.7-14.1-1.4-17.7-7.5l-6.6-11.4c-3.4-5.8-2.7-13.1 1.6-18.3 18.6-22.6 29.7-51.6 29.3-83.2C543.10324 89 486.30324 32.6 417.00324 32c-70.6-0.6-128.1 56.1-129 126.3-0.9 69.5 56.5 128.6 126 129.6 9.4 0.1 18.5-0.7 27.4-2.5 6.8-1.4 13.6 1.7 17.1 7.7l2.2 3.8c4 7 2.2 15.9-4.2 20.7-42.4 32.3-73 79.4-84 133.6-1.5 7.4-8.1 12.7-15.7 12.7h-94.1c-6.6 0-12.6-4-14.9-10.2-18.1-48-64.3-82.2-118.5-82.8C58.70324 370.3 0.50324 427.6 0.00324 498.1-0.49676 569.2 57.00324 627 128.00324 627c56.7 0 104.8-36.9 121.6-87.9 2.2-6.6 8.3-11.1 15.2-11.1h92c7.6 0 14.2 5.4 15.7 12.9 9.5 46.7 33.5 88 67 119.2 5.4 5 6.6 13.2 2.9 19.6l-21.7 37.6c-3.7 6.3-11.1 9.4-18.2 7.4-11.1-3.1-22.7-4.7-34.8-4.7-69.7 0.1-127 56.8-127.8 126.6-0.8 71.7 57.4 130 129.1 129.4 69.5-0.6 126.3-57.3 126.9-126.8 0.3-28-8.5-53.9-23.5-75.1-3.6-5.1-3.9-11.8-0.8-17.2l24.9-43.1c3.9-6.7 12-9.7 19.3-7 23.7 8.6 49.3 13.2 76 13.2 34.9 0 67.9-8 97.3-22.2 7.6-3.7 16.7-0.9 20.9 6.4l37 64c-26.3 23.5-43 57.7-43 95.8 0 70.9 58 128.5 128.9 128 69.7-0.5 126.2-56.7 127.1-126.3 0.9-70.1-57-129.3-127.1-129.7-6.2 0-12.3 0.4-18.3 1.2-6.5 0.9-12.8-2.2-16.1-7.8l-39.2-67.9c-3.4-5.9-2.7-13.3 1.7-18.4 34.2-39.3 54.9-90.7 54.9-147 0-38.9-9.9-75.5-27.4-107.4-3.4-6.2-2.2-13.9 2.8-18.9l28.4-28.4c4.9-4.9 12.4-6 18.7-2.9 17.4 8.6 36.9 13.5 57.6 13.5z m0-192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM128.00324 563c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z m240 349c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z m464-112c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM416.00324 224c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z m289.1 385.1C674.90324 639.4 634.70324 656 592.00324 656s-82.9-16.6-113.1-46.9C448.60324 578.9 432.00324 538.7 432.00324 496s16.6-82.9 46.9-113.1C509.10324 352.6 549.30324 336 592.00324 336s82.9 16.6 113.1 46.9C735.40324 413.1 752.00324 453.3 752.00324 496s-16.6 82.9-46.9 113.1z" p-id="3270"></path></svg>`,
      notMainKnowledge: `<svg t="1651124314636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1689" width="24" height="24"><path d="M877.44 383.786667L624.426667 117.333333C594.986667 86.186667 554.88 69.12 512 69.12s-82.986667 17.066667-112.426667 48.213333L146.56 383.786667a148.266667 148.266667 0 0 0-40.746667 102.4v302.08c0 85.76 69.76 155.52 155.52 155.52h501.546667c85.76 0 155.52-69.76 155.52-155.52V485.973333c0-38.186667-14.506667-74.453333-40.96-102.186666z m-44.373333 404.266666c0 38.826667-31.573333 70.186667-70.186667 70.186667H261.333333c-38.826667 0-70.186667-31.573333-70.186666-70.186667V485.973333c0-16.213333 6.186667-31.786667 17.28-43.52L461.44 176c13.226667-13.866667 31.146667-21.546667 50.56-21.546667s37.333333 7.68 50.56 21.76l253.013333 266.453334c11.306667 11.733333 17.28 27.306667 17.28 43.52v301.866666z" p-id="1690"></path><path d="M608 687.786667h-192c-23.466667 0-42.666667 19.2-42.666667 42.666666s19.2 42.666667 42.666667 42.666667h192c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666666z" p-id="1691"></path></svg>`,
      isMainKnowledge: `<svg t="1651124352868" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1850" width="24" height="24"><path d="M877.44 388.053333L624.426667 121.813333C594.986667 90.666667 554.88 73.386667 512 73.386667s-82.986667 17.066667-112.426667 48.213333L146.56 388.053333a148.266667 148.266667 0 0 0-40.746667 102.4v302.08c0 85.76 69.76 155.52 155.52 155.52h501.546667c85.76 0 155.52-69.76 155.52-155.52V490.453333c0-38.4-14.506667-74.666667-40.96-102.4zM608 777.386667h-192c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667h192c23.466667 0 42.666667 19.2 42.666667 42.666667s-19.2 42.666667-42.666667 42.666667z" p-id="1851"></path></svg>`,
      jumpAttachment: `<svg t="1651595553273" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7641" width="24" height="24"><path d="M950.857143 537.892571a293.924571 293.924571 0 0 0-73.142857-59.904V292.571429l-146.285715-146.285715H146.285714v731.428572h331.702857c15.945143 27.538286 36.205714 52.224 59.904 73.142857H146.285714a73.142857 73.142857 0 0 1-73.142857-73.142857V146.285714a73.142857 73.142857 0 0 1 73.142857-73.142857h621.714286l182.857143 182.857143v281.892571z m-93.549714 266.166858l82.505142 82.541714a37.668571 37.668571 0 0 1-53.211428 53.211428l-82.541714-82.505142a188.233143 188.233143 0 1 1 53.248-53.248z m-47.213715-101.449143a109.714286 109.714286 0 1 0-219.428571 0 109.714286 109.714286 0 0 0 219.428571 0zM202.605714 286.354286h49.371429v24.137143h0.731428c6.326857-10.24 14.372571-17.664 24.137143-22.308572s20.48-6.948571 32.182857-6.948571c14.884571 0 27.684571 2.816 38.4 8.411428 10.715429 5.595429 19.638857 13.056 26.697143 22.308572 7.058286 9.252571 12.324571 20.041143 15.725715 32.365714 3.401143 12.324571 5.12 25.161143 5.12 38.582857 0 12.690286-1.718857 24.868571-5.12 36.571429-3.401143 11.702857-8.594286 22.052571-15.542858 31.085714s-15.616 16.201143-25.965714 21.577143c-10.349714 5.376-22.491429 8.045714-36.388571 8.045714-11.702857 0-22.491429-2.377143-32.365715-7.131428a61.257143 61.257143 0 0 1-24.32-21.028572h-0.731428v89.6H202.605714V286.354286z m358.4 164.937143h-0.731428c-6.107429 10.24-14.08 17.627429-23.954286 22.125714s-21.028571 6.765714-33.462857 6.765714a80.822857 80.822857 0 0 1-37.302857-8.228571 74.898286 74.898286 0 0 1-26.514286-22.308572 101.229714 101.229714 0 0 1-15.725714-32.365714 135.862857 135.862857 0 0 1-5.302857-38.034286c0-12.690286 1.755429-24.941714 5.302857-36.754285 3.547429-11.812571 8.777143-22.235429 15.725714-31.268572s15.652571-16.274286 26.148571-21.76c10.496-5.485714 22.674286-8.228571 36.571429-8.228571 11.227429 0 21.869714 2.377143 32 7.131428s18.102857 11.776 23.954286 21.028572h0.731428v-95.085715h51.931429V475.428571h-49.371429v-24.137142z m99.84-130.194286h-31.085714v-34.742857h31.085714v-14.628572c0-16.822857 5.229714-30.610286 15.725715-41.325714 10.496-10.715429 26.331429-16.091429 47.542857-16.091429 4.644571 0 9.252571 0.182857 13.897143 0.548572 4.644571 0.365714 9.142857 0.658286 13.531428 0.914286v38.765714c-6.107429-0.731429-12.434286-1.097143-19.017143-1.097143-7.058286 0-12.141714 1.645714-15.177143 4.937143-3.035429 3.291429-4.571429 8.850286-4.571428 16.64v11.337143h35.84v34.742857h-35.84V475.428571h-51.931429V321.097143z m-362.788571 120.32c8.521143 0 15.652571-1.718857 21.394286-5.12 5.741714-3.401143 10.349714-7.862857 13.897142-13.348572 3.547429-5.485714 6.034286-11.885714 7.497143-19.2 1.462857-7.314286 2.194286-14.738286 2.194286-22.308571 0-7.570286-0.804571-14.994286-2.377143-22.308571a59.392 59.392 0 0 0-7.862857-19.565715 43.812571 43.812571 0 0 0-14.08-13.897143 39.314286 39.314286 0 0 0-21.028571-5.302857c-8.521143 0-15.652571 1.755429-21.394286 5.302857a42.678857 42.678857 0 0 0-13.897143 13.714286c-3.547429 5.595429-6.034286 12.068571-7.497143 19.382857-1.462857 7.314286-2.194286 14.884571-2.194286 22.674286 0 7.570286 0.804571 14.994286 2.377143 22.308571 1.572571 7.314286 4.132571 13.714286 7.68 19.2 3.547429 5.485714 8.228571 9.947429 14.08 13.348572 5.851429 3.401143 12.909714 5.12 21.211429 5.12z m262.217143-61.074286c0-7.789714-0.731429-15.286857-2.194286-22.491428a54.966857 54.966857 0 0 0-7.497143-19.017143 42.203429 42.203429 0 0 0-13.714286-13.348572 40.228571 40.228571 0 0 0-21.211428-5.12c-8.521143 0-15.725714 1.718857-21.577143 5.12-5.851429 3.401143-10.532571 7.936-14.08 13.531429a59.794286 59.794286 0 0 0-7.68 19.2 104.228571 104.228571 0 0 0-2.377143 22.491428c0 7.314286 0.841143 14.628571 2.56 21.942858 1.718857 7.314286 4.461714 13.824 8.228572 19.565714 3.766857 5.741714 8.521143 10.349714 14.262857 13.897143 5.741714 3.547429 12.617143 5.302857 20.662857 5.302857 8.521143 0 15.652571-1.718857 21.394286-5.12 5.741714-3.401143 10.313143-7.972571 13.714285-13.714286a61.44 61.44 0 0 0 7.314286-19.565714c1.462857-7.314286 2.194286-14.884571 2.194286-22.674286z" p-id="7642"></path></svg>`,
      export: `<svg t="1651322116327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11894" width="24" height="24"><path d="M849.2 599v217H178.5V599c-0.7-23.7-20.1-42.7-44-42.7s-43.3 19-44 42.7v252.5c0 28.9 23.6 52.5 52.5 52.5h741.7c28.9 0 52.5-23.6 52.5-52.5V599c-0.7-23.7-20.1-42.7-44-42.7s-43.3 19-44 42.7z" p-id="11895"></path><path d="M482.7 135.4l-164 164c-17.1 17.1-17.1 45.1 0 62.2s45.1 17.1 62.2 0l85.7-85.7v314.8c0 26 21.3 47.2 47.2 47.2 26 0 47.2-21.3 47.2-47.2V276l85.7 85.7c17.1 17.1 45.1 17.1 62.2 0s17.1-45.1 0-62.2l-164-164c-17.1-17.2-45.1-17.2-62.2-0.1z" p-id="11896"></path></svg>`,
      close: `<svg t="1651331457107" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12754" width="24" height="24"><path d="M557.311759 513.248864l265.280473-263.904314c12.54369-12.480043 12.607338-32.704421 0.127295-45.248112-12.512727-12.576374-32.704421-12.607338-45.248112-0.127295L512.127295 467.904421 249.088241 204.063755c-12.447359-12.480043-32.704421-12.54369-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.280796l262.975407 263.775299-265.151458 263.744335c-12.54369 12.480043-12.607338 32.704421-0.127295 45.248112 6.239161 6.271845 14.463432 9.440452 22.687703 9.440452 8.160624 0 16.319527-3.103239 22.560409-9.311437l265.216826-263.807983 265.440452 266.240344c6.239161 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.591372-9.34412 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112L557.311759 513.248864z" p-id="12755"></path></svg>`,
      openWorkspaceCollectionView: `<svg t="1651317033804" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2432" width="100%" height="100%"><path d="M874.9 459.4c-18.8 0-34 15.2-34 34v355.7c0 18.6-15.5 33.7-34.5 33.7H181.5c-19 0-34.5-15.1-34.5-33.7V232.3c0-18.6 15.5-33.7 34.5-33.7H541c18.8 0 34-15.2 34-34s-15.2-34-34-34H181.5C125 130.6 79 176.2 79 232.3v616.8c0 56 46 101.7 102.5 101.7h624.9c56.5 0 102.5-45.6 102.5-101.7V493.4c0-18.8-15.2-34-34-34z" fill="#b6b6b6" p-id="2433"></path><path d="M885.5 82.7H657.1c-18.8 0-34 15.2-34 34s15.2 34 34 34h169.7L358.5 619.1c-13.3 13.3-13.3 34.8 0 48.1 6.6 6.6 15.3 10 24 10s17.4-3.3 24-10l470-470v169.7c0 18.8 15.2 34 34 34s34-15.2 34-34V141.5c0.1-32.4-26.4-58.8-59-58.8z" fill="#b6b6b6" p-id="2434"></path></svg>`,
    };
  }

  getEditor(_document: Document) {
    let editor = _document.getElementsByClassName("primary-editor")[0];
    return editor;
  }

  async addEditorKnowledgeToolBar(editorInstances: EditorInstance) {
    await editorInstances._initPromise;

    await new Promise<void>((resolve, reject) => {
      const _document = editorInstances._iframeWindow.document;
      const knowledgeToolBar = _document.createElement("div");
      knowledgeToolBar.setAttribute("id", "knowledge-tools");
      knowledgeToolBar.setAttribute("class", "toolbar");
      const start = _document.createElement("div");
      start.setAttribute("id", "knowledge-tools-start");
      start.setAttribute("class", "start");
      const middle = _document.createElement("div");
      middle.setAttribute("id", "knowledge-tools-middle");
      middle.setAttribute("class", "middle");
      const end = _document.createElement("div");
      end.setAttribute("id", "knowledge-tools-end");
      end.setAttribute("class", "end");
      knowledgeToolBar.append(start, middle, end);
      _document
        .getElementsByClassName("editor")[0]
        .childNodes[0].before(knowledgeToolBar);
      resolve();
    });
  }

  async addEditorButton(
    editorInstances: EditorInstance,
    id: string,
    icon: string,
    title: string,
    eventType: string,
    position: "start" | "middle" | "end"
  ) {
    // Use Zotero.Notes._editorInstances to find current opened note editor
    await editorInstances._initPromise;

    const _document = editorInstances._iframeWindow.document;
    let knowledgeToolBar = _document.getElementById("knowledge-tools");
    if (!knowledgeToolBar) {
      await this.addEditorKnowledgeToolBar(editorInstances);
    }
    const toolbar = _document.getElementById(`knowledge-tools-${position}`);
    const dropdown = _document.createElement("div");
    dropdown.setAttribute("class", "dropdown more-dropdown");
    dropdown.setAttribute("id", id);
    const button = _document.createElement("button");
    button.setAttribute("class", "toolbar-button");
    button.setAttribute("title", title);
    button.setAttribute("eventType", eventType);
    button.innerHTML = this.editorIcon[icon];
    dropdown.append(button);
    toolbar.append(dropdown);
    const message = new EditorMessage("", {
      itemID: editorInstances._item.id,
      editorInstances: editorInstances,
    });
    dropdown.addEventListener("click", (e: XULEvent) => {
      message.type = e.target.getAttribute("eventType");
      message.content.event = e as XULEvent;
      message.content.editorInstance = editorInstances;
      this._Addon.events.onEditorEvent(message);
    });
    return dropdown;
  }

  async addEditorPopup(
    editorInstances: EditorInstance,
    id: string,
    buttons: { id: string; text: string; eventType: string }[],
    parentDropDown: Element
  ) {
    // Use Zotero.Notes._editorInstances to find current opened note editor
    await editorInstances._initPromise;

    const _document = editorInstances._iframeWindow.document;
    let knowledgeToolBar = _document.getElementById("knowledge-tools");
    if (!knowledgeToolBar) {
      await this.addEditorKnowledgeToolBar(editorInstances);
    }
    const popup = _document.createElement("div");
    popup.setAttribute("class", "popup");
    popup.setAttribute("id", id);
    for (let buttonParam of buttons) {
      const button = _document.createElement("button");
      button.setAttribute("class", "option");
      button.setAttribute("id", buttonParam.id);
      button.setAttribute("eventType", buttonParam.eventType);
      button.innerHTML = buttonParam.text;
      popup.append(button);
      const message = new EditorMessage("", {
        itemID: editorInstances._item.id,
        editorInstances: editorInstances,
      });
      button.addEventListener("click", (e: XULEvent) => {
        message.type = e.target.getAttribute("eventType");
        message.content.event = e as XULEvent;
        message.content.editorInstance = editorInstances;
        this._Addon.events.onEditorEvent(message);
        e.stopPropagation();
        popup.remove();
      });
    }
    parentDropDown.append(popup);
    return popup;
  }

  changeEditorButtonView(
    container: Element,
    icon: string,
    title: string = "",
    eventType: string = ""
  ) {
    const button = container.getElementsByTagName("button")[0];
    button.innerHTML = this.editorIcon[icon];
    if (title) {
      button.setAttribute("title", title);
    }
    if (eventType) {
      button.setAttribute("eventType", eventType);
    }
  }

  changeEditorButtonHidden(button: XUL.Element, hidden: boolean) {
    button.hidden = hidden;
  }

  async scrollToLine(instance: EditorInstance, lineIndex: number) {
    await instance._initPromise;
    let editor = this.getEditor(instance._iframeWindow.document);
    if (lineIndex > editor.children.length) {
      lineIndex = editor.children.length - 1;
    } else if (lineIndex < 0) {
      lineIndex = 0;
    }
    // @ts-ignore
    editor.parentNode.scrollTo(0, editor.children[lineIndex].offsetTop);
  }

  addOpenWorkspaceButton() {
    // Left collection tree view button
    const treeRow = document.createElement("html:div");
    treeRow.setAttribute("class", "row");
    treeRow.setAttribute(
      "style",
      "height: 22px; margin: 0 0 22px 0; padding: 0 6px 0 6px;"
    );
    const span1 = document.createElement("span");
    span1.setAttribute("class", "cell label primary");
    const span2 = document.createElement("span");
    span2.setAttribute("class", "icon icon-twisty twisty open");
    span2.innerHTML = this.editorIcon["openWorkspaceCollectionView"];
    const span3 = document.createElement("span");
    span3.setAttribute("class", "icon icon-bg cell-icon");
    span3.setAttribute(
      "style",
      "background-image:url(chrome://Knowledge4Zotero/skin/favicon.png)"
    );
    const span4 = document.createElement("span");
    span4.setAttribute("class", "cell-text");
    span4.setAttribute("style", "margin-left: 6px;");
    span4.innerHTML = "Knowledge";
    span1.append(span2, span3, span4);
    treeRow.append(span1);
    treeRow.addEventListener("click", (e) => {
      this._Addon.events.onEditorEvent(new EditorMessage("openWorkspace", {}));
    });
    treeRow.addEventListener("mouseover", (e: XULEvent) => {
      treeRow.setAttribute(
        "style",
        "height: 22px; margin: 0 0 22px 0; padding: 0 6px 0 6px; background-color: grey;"
      );
    });
    treeRow.addEventListener("mouseleave", (e: XULEvent) => {
      treeRow.setAttribute(
        "style",
        "height: 22px; margin: 0 0 22px 0; padding: 0 6px 0 6px;"
      );
    });
    document
      .getElementById("zotero-collections-tree-container")
      .children[0].before(treeRow);
  }

  async buildOutline(note: ZoteroItem) {
    this._Addon.knowledge.currentNodeID = -1;
    let treeList = this._Addon.knowledge.getNoteTreeAsList(note);
    const treeData = [];
    treeList.map((node: TreeModel.Node<object>) => {
      treeData.push({
        id: String(node.model.id),
        name: node.model.name,
        rank: node.model.rank,
        lineIndex: node.model.lineIndex,
        endIndex: node.model.endIndex,
        isDirectory: node.hasChildren(),
        expanded: true,
        parentId:
          node.model.rank > 1 ? String(node.parent.model.id) : undefined,
      });
    });
    this.$(() => {
      this.createTreeView("#treeview", treeData);
      this.createSortable("#treeview", "treeData");
    });
  }

  createTreeView(selector, items) {
    // @ts-ignore
    this.$(selector).dxTreeView({
      items,
      expandNodesRecursive: false,
      dataStructure: "plain",
      width: 220,
      height: this.$("window").height() - 130,
      displayExpr: "name",
      noDataText: "No Heading 1 found",
      onItemClick: (e) => {
        this._Addon.events.onEditorEvent(
          new EditorMessage("clickOutlineHeading", {
            event: e,
          })
        );
      },
      onItemSelectionChanged: (e) => {
        console.log(e);
      },
    });
    this.$("#outline-addafter").dxButton({
      icon: "plus",
      hint: "Add Heading after the selected Heading's section",
      onClick: (e) => {
        if (this._Addon.knowledge.currentNodeID < 0) {
          return;
        }
        const text = prompt("Enter new Heading:");
        this._Addon.knowledge.openWorkspaceWindow();
        if (text.trim()) {
          let node = this._Addon.knowledge.getNoteTreeNodeById(
            undefined,
            this._Addon.knowledge.currentNodeID
          );
          this._Addon.knowledge.addSubLineToNote(
            undefined,
            `<h${node.model.rank}>${text}</h${node.model.rank}>`,
            node.model.endIndex
          );
        }
      },
    });
    this.$("#outline-tab").dxButton({
      icon: "increaseindent",
      hint: "Raise the selected Heading level",
      onClick: (e) => {
        if (this._Addon.knowledge.currentNodeID < 0) {
          return;
        }
        let node = this._Addon.knowledge.getNoteTreeNodeById(
          undefined,
          this._Addon.knowledge.currentNodeID
        );
        this._Addon.knowledge.changeHeadingLineInNote(
          undefined,
          1,
          node.model.lineIndex
        );
      },
    });
    this.$("#outline-untab").dxButton({
      icon: "decreaseindent",
      hint: "Decrease the selected Heading level",
      onClick: (e) => {
        if (this._Addon.knowledge.currentNodeID < 0) {
          return;
        }
        let node = this._Addon.knowledge.getNoteTreeNodeById(
          undefined,
          this._Addon.knowledge.currentNodeID
        );
        this._Addon.knowledge.changeHeadingLineInNote(
          undefined,
          -1,
          node.model.lineIndex
        );
      },
    });
  }

  setTreeViewHeight() {
    this.$("#treeview").css("height", `${this.$("window").height() - 130}px`);
  }

  createSortable(selector, driveName) {
    // @ts-ignore
    this.$(selector).dxSortable({
      filter: ".dx-treeview-item",
      group: "shared",
      data: driveName,
      allowDropInsideItem: true,
      allowReordering: true,
      onDragChange: (e) => {
        if (e.fromComponent === e.toComponent) {
          const $nodes = e.element.find(".dx-treeview-node");
          const isDragIntoChild =
            $nodes.eq(e.fromIndex).find($nodes.eq(e.toIndex)).length > 0;
          if (isDragIntoChild) {
            e.cancel = true;
          }
        }
      },
      onDragEnd: (e) => {
        if (e.fromComponent === e.toComponent && e.fromIndex === e.toIndex) {
          return;
        }

        const fromTreeView = this.getTreeView();
        const toTreeView = this.getTreeView();

        const fromNode = this.findNode(fromTreeView, e.fromIndex);
        const toNode = this.findNode(toTreeView, this.calculateToIndex(e));

        if (
          e.dropInsideItem &&
          toNode !== null &&
          !toNode.itemData.isDirectory
        ) {
          return;
        }

        const fromTopVisibleNode = this.getTopVisibleNode(fromTreeView);
        const toTopVisibleNode = this.getTopVisibleNode(toTreeView);

        const fromItems = fromTreeView.option("items");
        const toItems = toTreeView.option("items");
        this.moveNode(fromNode, toNode, fromItems, toItems, e.dropInsideItem);

        fromTreeView.option("items", fromItems);
        toTreeView.option("items", toItems);
        fromTreeView.scrollToItem(fromTopVisibleNode);
        toTreeView.scrollToItem(toTopVisibleNode);
      },
    });
  }

  getTreeView() {
    // @ts-ignore
    return this.$("#treeview").dxTreeView("instance");
  }

  calculateToIndex(e) {
    if (e.fromComponent !== e.toComponent || e.dropInsideItem) {
      return e.toIndex;
    }

    return e.fromIndex >= e.toIndex ? e.toIndex : e.toIndex + 1;
  }

  findNode(treeView, index) {
    const nodeElement = treeView.element().find(".dx-treeview-node")[index];
    if (nodeElement) {
      return this.findNodeById(
        treeView.getNodes(),
        nodeElement.getAttribute("data-item-id")
      );
    }
    return null;
  }

  findNodeById(nodes, id) {
    for (let i = 0; i < nodes.length; i += 1) {
      if (nodes[i].itemData.id === id) {
        return nodes[i];
      }
      if (nodes[i].children) {
        const node = this.findNodeById(nodes[i].children, id);
        if (node != null) {
          return node;
        }
      }
    }
    return null;
  }

  moveNode(fromNode, toNode, fromItems, toItems, isDropInsideItem) {
    const fromIndex = this.findIndex(fromItems, fromNode.itemData.id);
    fromItems.splice(fromIndex, 1);

    const toIndex =
      toNode === null || isDropInsideItem
        ? toItems.length
        : this.findIndex(toItems, toNode.itemData.id);

    this._Addon.events.onEditorEvent(
      new EditorMessage("moveOutlineHeading", {
        params: {
          fromID: parseInt(fromNode.itemData.id),
          toID: toNode
            ? parseInt(toNode.itemData.id)
            : toItems[toItems.length - 1].itemData.id,
          type: toNode ? "before" : "after",
        },
      })
    );
    toItems.splice(toIndex, 0, fromNode.itemData);

    this.moveChildren(fromNode, fromItems, toItems);
    if (isDropInsideItem) {
      fromNode.itemData.parentId = toNode.itemData.id;
    } else {
      fromNode.itemData.parentId =
        toNode != null ? toNode.itemData.parentId : undefined;
    }
  }

  moveChildren(node, fromItems, toItems) {
    if (!node.itemData.isDirectory) {
      return;
    }

    node.children.forEach((child) => {
      if (child.itemData.isDirectory) {
        this.moveChildren(child, fromItems, toItems);
      }

      const fromIndex = this.findIndex(fromItems, child.itemData.id);
      fromItems.splice(fromIndex, 1);
      toItems.splice(toItems.length, 0, child.itemData);
    });
  }

  findIndex(array, id) {
    const idsArray = array.map((elem) => elem.id);
    return idsArray.indexOf(id);
  }

  getTopVisibleNode(component) {
    const treeViewElement = component.element().get(0);
    const treeViewTopPosition = treeViewElement.getBoundingClientRect().top;
    const nodes = treeViewElement.querySelectorAll(".dx-treeview-node");
    for (let i = 0; i < nodes.length; i += 1) {
      const nodeTopPosition = nodes[i].getBoundingClientRect().top;
      if (nodeTopPosition >= treeViewTopPosition) {
        return nodes[i];
      }
    }

    return null;
  }

  showProgressWindow(
    header: string,
    context: string,
    type: "default" | "success" | "fail" = "default",
    t: number = 5000
  ) {
    let progressWindow = new Zotero.ProgressWindow({ closeOnClick: true });
    progressWindow.changeHeadline(header);
    progressWindow.progress = new progressWindow.ItemProgress(
      this.progressWindowIcon[type],
      context
    );
    progressWindow.show();
    if (t > 0) {
      progressWindow.startCloseTimer(t);
    }
  }
}

export default AddonViews;
