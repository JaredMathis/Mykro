import _ from "lodash";
import {arguments_assert} from "./../../arguments/assert.mjs";
import {defined_is} from "./../../defined/is.mjs";
export async function js_function_is(value) {
  await arguments_assert(defined_is)(arguments);
  return _.isFunction(value);
}
