import _ from "lodash";
import {arguments_assert} from "./arguments_assert.mjs";
import {defined_is} from "./defined_is.mjs";
export async function number_is(value) {
  await arguments_assert(defined_is)(arguments);
  return _.isNumber(value);
}
