import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
export async function list_is(value) {
  await js_arguments_assert(defined_is)(arguments);
  return _.isArray(value);
}
