import {file_overwrite} from "./../overwrite.mjs";
import {json_to} from "./../../json/to.mjs";
import {m_js_string_is} from "./../../m/js/string/is.mjs";
import {m_js_defined_is} from "./../../m/js/defined/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function file_json_save(value, file_path) {
  await m_js_arguments_assert(m_js_defined_is, m_js_string_is)(arguments);
  let json = await json_to(value);
  await file_overwrite(file_path, json);
}
