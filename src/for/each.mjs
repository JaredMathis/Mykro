import _ from "lodash";
import {arguments_assert} from "./../arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {true_is} from "./../true/is.mjs";
export async function for_each(list, for_each_item) {
  await arguments_assert(_.isArray, _.isFunction)(arguments);
  let index = 0;
  for (let item of list) {
    let result = await for_each_item(item, index);
    if (await defined_is(result)) {
      if (await true_is(result)) {
        break;
      }
    }
    index++;
  }
}
