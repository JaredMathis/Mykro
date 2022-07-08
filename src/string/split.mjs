import _ from "lodash";
import {arguments_assert} from "./../arguments/assert.mjs";
export async function string_split(s, split_by) {
  await arguments_assert(_.isString, _.isString)(arguments);
  return s.split(split_by);
}
