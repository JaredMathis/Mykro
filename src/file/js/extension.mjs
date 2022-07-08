import {arguments_assert} from "./../../arguments/assert.mjs";
export async function file_js_extension() {
  await arguments_assert()(arguments);
  return ".mjs";
}
