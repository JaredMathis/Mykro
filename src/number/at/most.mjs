import _ from "lodash";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function number_at_most(value, maximum) {
  await js_arguments_assert(_.isNumber, _.isNumber)(arguments);
  return value <= maximum;
}
