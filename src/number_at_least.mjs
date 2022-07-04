import _ from "lodash";
import {arguments_assert} from "./arguments_assert.mjs";
export async function number_at_least(value, minimum) {
  await arguments_assert(_.isNumber, _.isNumber)(arguments);
  return value >= minimum;
}
