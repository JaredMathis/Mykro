import _ from "lodash";
import {js_arguments_assert} from "./../arguments/assert.mjs";
import {js_defined_is} from "./../defined/is.mjs";
import {js_true_is} from "./../true/is.mjs";
export async function js_for_each(list, for_each_item) {
  await js_arguments_assert(_.isArray, _.isFunction)(arguments);
  let index = 0;
  for (let item of list) {
    let result = await for_each_item(item, index);
    if (await js_defined_is(result)) {
      if (await js_true_is(result)) {
        break;
      }
    }
    index++;
  }
}