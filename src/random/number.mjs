import _ from "lodash";
import {arguments_assert} from "./../arguments/assert.mjs";
import {number_is} from "./../number/is.mjs";
export async function random_number(min, max) {
  await arguments_assert(number_is, number_is)(arguments);
  return _.random(min, max);
}
