import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
export async function string_split(s, split_by) {
  await js_arguments_assert(_.isString, _.isString)(arguments);
  return s.split(split_by);
}
