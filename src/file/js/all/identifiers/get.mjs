import {list_add_all} from "./../../../../list_add_all.mjs";
import {file_js_all} from "./../../all.mjs";
import {file_js_identifiers_get} from "./../../../../file_js_identifiers_get.mjs";
import {arguments_assert} from "./../../../../arguments/assert.mjs";
import {for_each} from "./../../../../for_each.mjs";
import {list_unique} from "./../../../../list_unique.mjs";
export async function file_js_all_identifiers_get() {
  await arguments_assert()(arguments);
  let result = [];
  let files = await file_js_all();
  await for_each(files, async file => {
    let identifiers = await file_js_identifiers_get(file.name);
    await list_add_all(result, identifiers);
  });
  result = await list_unique(result);
  return result;
}
