import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../m/js/string/is.mjs";
import {file_overwrite} from "./overwrite.mjs";
import {file_read} from "./read.mjs";
export async function file_prepend(file_path, text_prepend) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  let existing = await file_read(file_path);
  let replacement = text_prepend + existing;
  await file_overwrite(file_path, replacement);
}
