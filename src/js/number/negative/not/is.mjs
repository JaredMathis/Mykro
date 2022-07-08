import _ from "lodash";
import {js_arguments_assert} from "./../../../arguments/assert.mjs";
import {js_number_at_least} from "./../../at/least.mjs";
export async function js_number_negative_not_is(value) {
  await js_arguments_assert(_.isNumber)(arguments);
  return js_number_at_least(value, 0);
}
