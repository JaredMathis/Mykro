import {json_from} from "./../../json/from.mjs";
import {file_read} from "./../read.mjs";
import {m_js_string_is} from "./../../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function file_json_read(file_path) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  let unparsed = await file_read(file_path);
  let parsed = await json_from(unparsed);
  return parsed;
}
