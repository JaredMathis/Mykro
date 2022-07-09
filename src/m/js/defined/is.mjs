import _ from "lodash";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {m_js_tautology} from "./../tautology.mjs";
export async function m_js_defined_is(value) {
  await m_js_arguments_assert(m_js_tautology)(arguments);
  return !_.isUndefined(value);
}
