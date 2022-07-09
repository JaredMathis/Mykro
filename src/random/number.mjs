import _ from "lodash";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_number_is} from "./../m/js/number/is.mjs";
export async function random_number(min, max) {
  await m_js_arguments_assert(m_js_number_is, m_js_number_is)(arguments);
  return _.random(min, max);
}
