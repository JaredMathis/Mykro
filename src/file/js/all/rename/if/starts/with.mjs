import {file_js_all} from "./../../../../all.mjs";
import {string_is} from "./../../../../../../string/is.mjs";
import {js_arguments_assert} from "./../../../../../../js/arguments/assert.mjs";
import {for_each} from "./../../../../../../for/each.mjs";
import {string_starts_with} from "./../../../../../../string/starts/with.mjs";
export async function file_js_all_rename_if_starts_with(prefix_old, prefix_new) {
  await js_arguments_assert(string_is, string_is)(arguments);
  let files = await file_js_all();
  await for_each(files, async file => {
    if (await string_starts_with(file.name, prefix_old)) {
      let function_name_new = await string_prefix_replace(file.name, prefix_old, prefix_new);
    }
  });
}
