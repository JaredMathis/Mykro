import _ from "lodash";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
import {m_js_number_at_most} from "./../m/js/number/at/most.mjs";
import {m_js_number_negative_not_is} from "./../m/js/number/negative/not/is.mjs";
import {list_where} from "./../list/where.mjs";
import {m_js_false_is} from "./../m/js/false/is.mjs";
import {m_js_true_is} from "./../m/js/true/is.mjs";
export async function probability_is(p) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  let requirements = [_.isNumber(p), await m_js_number_negative_not_is(p), await m_js_number_at_most(p, 1)];
  return _.every(await list_where(requirements, m_js_true_is));
}
