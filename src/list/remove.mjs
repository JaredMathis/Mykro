import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_assert} from "./../m/js/assert.mjs";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
import {list_index_of} from "./index/of.mjs";
import {list_is} from "./is.mjs";
import {list_remove_at} from "./remove/at.mjs";
import {list_remove_try} from "./remove/try.mjs";
import {m_js_property_get} from "./../m/js/property/get.mjs";
import {m_js_true_is} from "./../m/js/true/is.mjs";
export async function list_remove(list, item) {
  await m_js_arguments_assert(list_is, m_js_defined_is)(arguments);
  let result = await list_remove_try(list, item);
  await m_js_assert(m_js_true_is)(await m_js_property_get(result, "success"));
  return result;
}
