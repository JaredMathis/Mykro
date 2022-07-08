import {js_string_prefix_replace} from "./../../../../../../js/string/prefix/replace.mjs";
import {file_js_rename} from "./../../../../rename.mjs";
import {file_js_all} from "./../../../../all.mjs";
import {js_string_is} from "./../../../../../../js/string/is.mjs";
import {js_arguments_assert} from "./../../../../../../js/arguments/assert.mjs";
import {js_for_each} from "./../../../../../../js/for/each.mjs";
import {js_string_starts_with} from "./../../../../../../js/string/starts/with.mjs";
import {file_js_all_function_names} from "../../../function/names.mjs";
export async function file_js_all_rename_if_starts_with(prefix_old, prefix_new) {
  await js_arguments_assert(js_string_is, js_string_is)(arguments);
  let function_names = await file_js_all_function_names();
  await js_for_each(function_names, async function_name => {
    if (await js_string_starts_with(function_name, prefix_old)) {
      let function_name_new = await js_string_prefix_replace(function_name, prefix_old, prefix_new);
      await file_js_rename(function_name, function_name_new);
    }
  });
}
