import {m_js_string_is} from "./../../../m/js/string/is.mjs";
import {m_js_string_join} from "./../../../m/js/string/join.mjs";
import {random_list_slice} from "./../slice.mjs";
import {list_is} from "./../../../list/is.mjs";
import {m_js_number_is} from "./../../../m/js/number/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function random_list_slice_join(list, slice_size, join_by) {
  await m_js_arguments_assert(list_is, m_js_number_is, m_js_string_is)(arguments);
  let slice = await random_list_slice(list, slice_size);
  let joined = await m_js_string_join(slice, join_by);
  return joined;
}
