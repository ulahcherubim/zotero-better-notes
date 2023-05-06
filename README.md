# Zotero Better Notes

[![Using Zotero Plugin Template](https://img.shields.io/badge/Using-Zotero%20Plugin%20Template-blue?style=flat-square&logo=github)](https://github.com/windingwind/zotero-plugin-template)

![teaser](./docs/res/teaser.png)

Everything about note management. All in Zotero.

Better Notes Handbook: [EN](https://github.com/windingwind/zotero-better-notes/wiki) | [中文 (provide translation)](https://zotero.yuque.com/staff-gkhviy/better-notes/biigg4?)

## 🧩 Outline

[🧐 What is this?](#🧐-what-is-this)

[🤔 What can it do?](#🤔-what-can-it-do)

[👋 Install](#👋-install)

[😎 Quick start](#😎-quick-start)

<details style="text-indent: 2em">
<summary>More</summary>

[Getting Started with the _Workspace_](#getting-started-with-the-workspace)

[Note Editor](#note-editor)

[Note Link](#note-link)

[Note Template](#note-template)

[Syncing: Note 🔄️ Markdown](#syncing-note-🔄️-markdown)

[Note Export](#note-export)

[GPT Integration](#gpt-integration)

[Other Features](#other-features)

</details>

[🧲 API](#🧲-api)

[🔧 Development](#🔧-development)

[🔔 Disclaimer](#🔔-disclaimer)

[🔎 My Zotero Plugins](#🔎-my-zotero-plugins)

[💰 Sponsor Me](#💰-sponsor-me)

[🫶 Sponsors](#🫶-sponsors)

## 🧐 What is this?

Better Notes (BN) is a plugin for [Zotero](https://zotero.org).

BN streamlines your workflows of:

- paper reading
- annotating
- note taking
- metadata analyzing
- knowledge exporting
- AI writing assistant

and:

- works out of the box
- highly customizable
- all in Zotero

## 🤔 What can it do?

🖇️ Connect knowledge fragments with _note link_. By one click. [Learn more →](#note-link)

🗂️ Simplify and automate knowledge analysis with extensive _note template_. By one click. [Learn more →](#note-template)

🔄️ Keep in sync with your Markdown files. Two-way, automatically. [Learn more →](#syncing-note-🔄️-markdown)

🖨️ Export note to different formats: Markdown, Docx, PDF, and mind map. [Learn more →](#note-export)

📝 Enhancements for Zotero's note editor.

## 👋 Install

- Download the latest release (.xpi file) from the [Releases Page](https://github.com/windingwind/zotero-better-notes/releases)_Note_ If you're using Firefox as your browser, right-click the `.xpi` and select "Save As.."
- In Zotero click `Tools` in the top menu bar and then click `Addons`
- Go to the Extensions page and then click the gear icon in the top right.
- Select `Install Add-on from file`.
- Browse to where you downloaded the `.xpi` file and select it.
- Finish!

## 😎 Quick start

BN offers a range of features that can be combined like lego blocks to build your own note-taking workflow.

Start taking notes in Zotero with BN in **5 minutes**!

### Getting Started with the _Workspace_

The _workspace_ serves as the **central hub** where input flows (papers and annotations) converge with output flows (summaries and comparisons).

To open the _workspace_, click the ![icon](addon/chrome/content/icons/favicon.png) button in the tabs bar.

![workspace](insert image link here)

The _workspace_ contains a default note called the _workspace note_. You can create a new note as the _workspace note_ if prompted on opening _workspace_.

> 💡 How to set an existing note as the _workspace note_?
>
> 1. In the library: select a note item and right-click
> 2. In the note editor: click on the tools button
>
> You can change the _workspace note_ at any time.

The _workspace_ allows you to take notes and write, just like you would in MS Word or a markdown editor (e.g., Obsidian).

> **Explore the _Workspace_!**  
> 💡 The layout from left to right is:
>
> - Outline
> - _Workspace note_ editor (main editor)
> - Note link preview (hidden by default)
> - Reader notes pane (hidden by default)
>
> 💡 To toggle these panes, hover the _workspace_ tab and click corresponding buttons.  
> 💡 To open the _workspace_ in a new window, drag the _workspace_ tab.

### Note Editor

The _workspace_ includes the note editor for the _workspace note_. You can use it to take notes and write summaries.

> 💡 How to open note editor?
>
> - In the library: click to open a note editor and double-click to open note editor in a standalone window.
> - In the PDF reader: right-side bar
>
> 💡 How to create a new note?  
> Click the note icon in the library tools bar (the row under the tabs bar).

![note editor example](insert image link here)

### Note Link

To create a _note link_ between current note and the _workspace note_, simply click the ![icon](addon/chrome/content/icons/favicon.png) button in the title bar of current note editor.

![note link example](insert image link here)

### Note Template

Still spending a lot of time writing summaries or doing copy-pasting while taking notes? Say hello to _Note Template_!

_Note Template_ is designed for tasks like:

- Summarize metadata and annotations from multiple papers, with customized filters
- Compare papers across sections
- Generate content programmatically

> 💡 Want to write your own templates? [Learn more →](#note-link)
>
> 💡 Need help or looking for community templates?[Learn more →](#note-link)

![note template example](insert image link here)

### Syncing: Note 🔄️ Markdown

With BN, you can integrate your note-taking into your existing workflow seamlessly. If you use markdown editors like Obsidian, you can keep your notes in sync with external Markdown files easily.

To set up auto-sync, click `Set Auto-Sync` the first time you export your note. There is no need for any third-party tools or complicated setups!

![note syncing example](insert image link here)

Any changes made to your note or its corresponding Markdown file will be automatically synced. This feature makes it easy to keep all of your notes up to date and in one place.

> 💡 Note: The note being edited will be synced after the editor is closed.

### Note Export

BN offers various options to export your notes, giving you the flexibility to choose the format that suits your needs.

You can export your note to the following formats:

- A new note in Zotero
- Markdown file (embedded or linked, with images)
- MS Word document (.docx)
- PDF document (.pdf)
- FreeMind file (.mm)

Simply click on the corresponding export button in the toolbar and follow the prompts.

### GPT Integration

The [Zotero-GPT](https://github.com/MuiseDestiny/zotero-gpt) plugin provides GPT Integration. If you also have Better Notes installed, you can wake up GPT pane in the _workspace_ note editor with `space` key.

You can:

- Ask GPT questions about current note
- Summarize/fix spelling and grammar/translate/polish the selection
- Accept suggestions/modifications from GPT with `enter` key.

### Other Features

- Quick Note: convert annotation to note with one click.
- Resize images with right-click menu.
- Preview images with double-click/ctrl-click.

## 🧲 API

BN provides APIs for other plugin developers in `Zotero.BetterNotes.api.${API_MODULE}`. See [`api.ts`](src/api.ts).

- `workspace`: Workspace APIs
- `sync`: Syncing APIs
- `convert`: Lossless conversion between note, HTML, Markdown, note link, and annotation
- `template`: Manipulate note templates
- `$export`: Export note
- `$import`: Import note
- `editor`: Note editor APIs. Give your script the full control of contents in the note editor.

## 🔧 Development

This plugin is built based on the [Zotero Plugin Template](https://github.com/windingwind/zotero-plugin-template). See the setup and debug details there.

To startup, run

```bash
git clone https://github.com/windingwind/zotero-better-notes.git
cd zotero-better-notes
npm install
npm run build
```

The plugin is built to `./builds/*.xpi`.

## 🔔 Disclaimer

Use this code under AGPL. No warranties are provided. Keep the laws of your locality in mind!

## 🔎 My Zotero Plugins

- [zotero-pdf-translate](https://github.com/windingwind/zotero-pdf-translate): PDF translation for Zotero
- [zotero-pdf-preview](https://github.com/windingwind/zotero-tag): PDF preview for Zotero
- [zotero-tag](https://github.com/windingwind/zotero-tag): Automatically tag items/Batch tagging

## 💰 Sponsor Me

I'm windingwind, an active Zotero(https://www.zotero.org) plugin developer. Devoting to making reading papers easier.

Sponsor me to buy a cup of coffee. I spend more than 24 hours every week coding, debugging, and replying to issues in my plugin repositories. The plugins are open-source and totally free.

If you sponsor more than $10 a month, you can list your name/logo here and have priority for feature requests/bug fixes!

## 🫶 Sponsors

Thanks
[peachgirl100](https://github.com/peachgirl100), [Juan Gimenez](),
and other anonymous sponsors!

If you want to leave your name here, please email me or leave a message with the donation.
