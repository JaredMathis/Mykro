import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {number_is} from "./../number/is.mjs";
export async function random_number(min, max) {
  await js_arguments_assert(number_is, number_is)(arguments);
  return _.random(min, max);
}
