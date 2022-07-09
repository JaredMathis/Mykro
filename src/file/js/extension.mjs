import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function file_js_extension() {
  await m_js_arguments_assert()(arguments);
  return ".mjs";
}
