import _ from "lodash";
import {m_js_arguments_assert} from "./../../../arguments/assert.mjs";
import {m_js_number_at_least} from "./../../at/least.mjs";
export async function m_js_number_negative_not_is(value) {
  await m_js_arguments_assert(_.isNumber)(arguments);
  return m_js_number_at_least(value, 0);
}
