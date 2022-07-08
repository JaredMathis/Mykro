import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_defined_is} from "./../js/defined/is.mjs";
export async function number_is(value) {
  await js_arguments_assert(js_defined_is)(arguments);
  return _.isNumber(value);
}
