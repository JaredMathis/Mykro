import {file_js_imports_missing_add} from "./imports/missing/add.mjs";
import {m_js_string_identifier_is} from "./../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {file_js_imports_resolve} from "./imports/resolve.mjs";
export async function file_js_auto(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  await file_js_imports_missing_add(function_name);
  await file_js_imports_resolve(function_name);
}
