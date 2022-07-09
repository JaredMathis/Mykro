import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {file_js_import_add} from "./../../import/add.mjs";
import {m_js_string_identifier_is} from "./../../../../m/js/string/identifier/is.mjs";
import {file_js_imports_missing_get} from "./get.mjs";
import {m_js_for_each} from "./../../../../m/js/for/each.mjs";
export async function file_js_imports_missing_add(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  let {imports_missing} = await file_js_imports_missing_get(function_name);
  await m_js_for_each(imports_missing, async import_missing => {
    await file_js_import_add(function_name, import_missing);
  });
}
