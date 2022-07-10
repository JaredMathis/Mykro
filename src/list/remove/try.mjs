import {list_remove_at} from "./at.mjs";
import {m_js_property_get} from "./../../m/js/property/get.mjs";
import {m_js_true_is} from "./../../m/js/true/is.mjs";
import {m_js_assert} from "./../../m/js/assert.mjs";
import {list_index_of} from "./../index/of.mjs";
import {m_js_defined_is} from "./../../m/js/defined/is.mjs";
import {list_is} from "./../is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function list_remove_try(list, item) {
  await m_js_arguments_assert(list_is, m_js_defined_is)(arguments);
  let index_of = await list_index_of(list, item);
  const success = await m_js_property_get(index_of, "success");
  if (!success) {
    return index_of;
  }
  let index = await m_js_property_get(index_of, "index");
  await list_remove_at(list, index);
  return index_of;
}
