import _ from "lodash";
import {js_arguments_assert} from "./../arguments/assert.mjs";
export async function js_string_split(s, split_by) {
  await js_arguments_assert(_.isString, _.isString)(arguments);
  return s.split(split_by);
}
