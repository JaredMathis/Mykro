import {file_js_imports_resolve} from "./imports/resolve.mjs";
import {m_js_for_each} from "./../../m/js/for/each.mjs";
import {file_js_all} from "./all.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_string_identifier_is} from "./../../m/js/string/identifier/is.mjs";
import {m_js_string_is} from "./../../m/js/string/is.mjs";
import {file_js_move_without_resolve} from "./move/without/resolve.mjs";
export async function file_js_move(function_name, function_name_new) {
  await m_js_arguments_assert(m_js_string_identifier_is, m_js_string_is)(arguments);
  await file_js_move_without_resolve(function_name, function_name_new);
  let files = await file_js_all();
  await m_js_for_each(files, async file => {
    await file_js_imports_resolve(file.name);
  });
  return {
    function_name_new
  };
}
