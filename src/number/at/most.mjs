import _ from "lodash";
import {arguments_assert} from "./../../arguments/assert.mjs";
export async function number_at_most(value, maximum) {
  await arguments_assert(_.isNumber, _.isNumber)(arguments);
  return value <= maximum;
}
