import {js_string_prefix_replace} from "./../../../../../../js/string/prefix/replace.mjs";
import {file_js_rename} from "./../../../../rename.mjs";
import {file_js_all} from "./../../../../all.mjs";
import {js_string_is} from "./../../../../../../js/string/is.mjs";
import {js_arguments_assert} from "./../../../../../../js/arguments/assert.mjs";
import {for_each} from "./../../../../../../for/each.mjs";
import {js_string_starts_with} from "./../../../../../../js/string/starts/with.mjs";
export async function file_js_all_rename_if_starts_with(prefix_old, prefix_new) {
  await js_arguments_assert(js_string_is, js_string_is)(arguments);
  let files = await file_js_all();
  await for_each(files, async file => {
    if (await js_string_starts_with(file.name, prefix_old)) {
      let function_name_new = await js_string_prefix_replace(file.name, prefix_old, prefix_new);
      await file_js_rename(file.name, function_name_new);
    }
  });
}
