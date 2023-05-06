import {
  md2note,
  note2md,
  note2noteDiff,
  note2link,
  link2note,
  link2html,
  md2html,
  html2md,
  annotations2html,
} from "./modules/convert/api";
import { exportNotes } from "./modules/export/api";
import { saveDocx } from "./modules/export/docx";
import { saveFreeMind } from "./modules/export/freemind";
import { saveMD, syncMDBatch } from "./modules/export/markdown";
import { savePDF } from "./modules/export/pdf";
import { fromMD } from "./modules/import/markdown";
import {
  isSyncNote,
  getSyncNoteIds,
  addSyncNote,
  updateSyncStatus,
  removeSyncNote,
  getSyncStatus,
  getNoteStatus,
  getMDStatus,
  getMDStatusFromContent,
  getMDFileName,
  getRelatedNoteIds,
} from "./modules/sync/api";
import { runTemplate, runItemTemplate } from "./modules/template/api";
import {
  getTemplateKeys,
  getTemplateText,
  setTemplate,
  initTemplates,
  removeTemplate,
} from "./modules/template/controller";
import {
  SYSTEM_TEMPLATE_NAMES,
  DEFAULT_TEMPLATES,
} from "./modules/template/data";
import { renderTemplatePreview } from "./modules/template/preview";
import { getWorkspaceEditor } from "./modules/workspace/content";
import {
  getEditorInstance,
  insert,
  del,
  scroll,
  getTextBetweenLines,
  getLineAtCursor,
  getPositionAtLine,
  getTextBetween,
  getRangeAtCursor,
  move,
  replace,
} from "./utils/editor";

const workspace = {
  getWorkspaceEditor,
};

const sync = {
  isSyncNote,
  getSyncNoteIds,
  addSyncNote,
  updateSyncStatus,
  removeSyncNote,
  getSyncStatus,
  getNoteStatus,
  getMDStatus,
  getMDStatusFromContent,
  getMDFileName,
  getRelatedNoteIds,
};

const convert = {
  md2note,
  note2md,
  note2noteDiff,
  note2link,
  link2note,
  link2html,
  md2html,
  html2md,
  annotations2html,
};

const template = {
  SYSTEM_TEMPLATE_NAMES,
  DEFAULT_TEMPLATES,
  runTemplate,
  runItemTemplate,
  getTemplateKeys,
  getTemplateText,
  setTemplate,
  initTemplates,
  removeTemplate,
  renderTemplatePreview,
};

const $export = {
  exportNotes,
  saveMD,
  syncMDBatch,
  saveFreeMind,
  saveDocx,
  savePDF,
};

const $import = {
  fromMD,
};

const editor = {
  getEditorInstance,
  insert,
  del,
  move,
  replace,
  scroll,
  getRangeAtCursor,
  getLineAtCursor,
  getPositionAtLine,
  getTextBetween,
  getTextBetweenLines,
};

export default {
  workspace,
  sync,
  convert,
  template,
  $export,
  $import,
  editor,
};