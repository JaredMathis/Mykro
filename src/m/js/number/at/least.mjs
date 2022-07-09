import _ from "lodash";
import {m_js_arguments_assert} from "./../../arguments/assert.mjs";
export async function m_js_number_at_least(value, minimum) {
  await m_js_arguments_assert(_.isNumber, _.isNumber)(arguments);
  return value >= minimum;
}
