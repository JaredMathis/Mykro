import {list_add_all} from "./../../../../list/add/all.mjs";
import {file_js_all} from "./../../all.mjs";
import {file_js_identifiers_get} from "./../../identifiers/get.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {m_js_for_each} from "./../../../../m/js/for/each.mjs";
import {list_unique} from "./../../../../list/unique.mjs";
export async function file_js_all_identifiers_get() {
  await m_js_arguments_assert()(arguments);
  let result = [];
  let files = await file_js_all();
  await m_js_for_each(files, async file => {
    let identifiers = await file_js_identifiers_get(file.name);
    await list_add_all(result, identifiers);
  });
  result = await list_unique(result);
  return result;
}
