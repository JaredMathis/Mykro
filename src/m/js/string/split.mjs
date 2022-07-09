import _ from "lodash";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
export async function m_js_string_split(s, split_by) {
  await m_js_arguments_assert(_.isString, _.isString)(arguments);
  return s.split(split_by);
}
