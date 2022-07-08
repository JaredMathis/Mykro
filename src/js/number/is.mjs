import _ from "lodash";
import {js_arguments_assert} from "./../arguments/assert.mjs";
import {js_defined_is} from "./../defined/is.mjs";
export async function js_number_is(value) {
  await js_arguments_assert(js_defined_is)(arguments);
  return _.isNumber(value);
}
