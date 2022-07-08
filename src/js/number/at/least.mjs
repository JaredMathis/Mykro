import _ from "lodash";
import {js_arguments_assert} from "./../../arguments/assert.mjs";
export async function js_number_at_least(value, minimum) {
  await js_arguments_assert(_.isNumber, _.isNumber)(arguments);
  return value >= minimum;
}
