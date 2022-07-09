import _ from "lodash";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_for_each} from "./../m/js/for/each.mjs";
export async function list_map(list, mapper) {
  await m_js_arguments_assert(_.isArray, _.isFunction)(arguments);
  let result = [];
  await m_js_for_each(list, async item => {
    let mapped = await mapper(item);
    result.push(mapped);
  });
  return result;
}
