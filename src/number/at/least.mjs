import _ from "lodash";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function number_at_least(value, minimum) {
  await js_arguments_assert(_.isNumber, _.isNumber)(arguments);
  return value >= minimum;
}
