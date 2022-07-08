import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function file_js_extension() {
  await js_arguments_assert()(arguments);
  return ".mjs";
}
