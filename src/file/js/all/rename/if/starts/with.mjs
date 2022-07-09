import {m_js_string_prefix_replace} from "./../../../../../../m/js/string/prefix/replace.mjs";
import {file_js_rename} from "./../../../../rename.mjs";
import {file_js_all} from "./../../../../all.mjs";
import {m_js_string_is} from "./../../../../../../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../../../../../m/js/arguments/assert.mjs";
import {m_js_for_each} from "./../../../../../../m/js/for/each.mjs";
import {m_js_string_starts_with} from "./../../../../../../m/js/string/starts/with.mjs";
import {file_js_all_function_names} from "./../../../function/names.mjs";
export async function file_js_all_rename_if_starts_with(prefix_old, prefix_new) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  let function_names = await file_js_all_function_names();
  await m_js_for_each(function_names, async function_name => {
    if (await m_js_string_starts_with(function_name, prefix_old)) {
      let function_name_new = await m_js_string_prefix_replace(function_name, prefix_old, prefix_new);
      await file_js_rename(function_name, function_name_new);
    }
  });
}
