import _ from "lodash";
import {arguments_assert} from "./../arguments/assert.mjs";
import {for_each} from "./../for/each.mjs";
export async function list_map(list, mapper) {
  await arguments_assert(_.isArray, _.isFunction)(arguments);
  let result = [];
  await for_each(list, async item => {
    let mapped = await mapper(item);
    result.push(mapped);
  });
  return result;
}
