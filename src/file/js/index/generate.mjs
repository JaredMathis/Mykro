import { file_js_all } from "../all.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
export async function file_js_index_generate() {
  await js_arguments_assert()(arguments);
  let files = await file_js_all();
  return files;
}
