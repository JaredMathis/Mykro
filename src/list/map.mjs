import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_for_each} from "./../js/for/each.mjs";
export async function list_map(list, mapper) {
  await js_arguments_assert(_.isArray, _.isFunction)(arguments);
  let result = [];
  await js_for_each(list, async item => {
    let mapped = await mapper(item);
    result.push(mapped);
  });
  return result;
}
