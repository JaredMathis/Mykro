import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_number_is} from "./../js/number/is.mjs";
export async function random_number(min, max) {
  await js_arguments_assert(js_number_is, js_number_is)(arguments);
  return _.random(min, max);
}
