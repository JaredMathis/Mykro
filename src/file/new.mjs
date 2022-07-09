import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../m/js/string/is.mjs";
import {file_overwrite} from "./overwrite.mjs";
export async function file_new(file_path) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  await file_overwrite(file_path, "");
}
