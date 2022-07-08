import {arguments_assert} from "./../../../arguments/assert.mjs";
import {file_js_all_for_each} from "./for/each.mjs";
import {file_js_folderize} from "./../folderize.mjs";
export async function file_js_all_folderize() {
  await arguments_assert()(arguments);
  await file_js_all_for_each(file_js_folderize.name);
}
