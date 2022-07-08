import _ from "lodash";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {number_at_least} from "./../../at/least.mjs";
export async function number_negative_not_is(value) {
  await js_arguments_assert(_.isNumber)(arguments);
  return number_at_least(value, 0);
}
