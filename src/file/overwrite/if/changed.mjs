import {m_js_string_is} from "./../../../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {file_read} from "./../../read.mjs";
import {m_js_equals} from "./../../../m/js/equals.mjs";
import {file_overwrite} from "./../../overwrite.mjs";
export async function file_overwrite_if_changed(file_path, text) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  let existing = await file_read(file_path);
  if (m_js_equals(existing, text)) {
    return;
  }
  await file_overwrite(file_path, text);
}
