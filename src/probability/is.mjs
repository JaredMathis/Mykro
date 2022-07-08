import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_defined_is} from "./../js/defined/is.mjs";
import {js_number_at_most} from "./../js/number/at/most.mjs";
import {js_number_negative_not_is} from "./../js/number/negative/not/is.mjs";
import {list_where} from "./../list/where.mjs";
import {js_false_is} from "./../js/false/is.mjs";
import {js_true_is} from "./../js/true/is.mjs";
export async function probability_is(p) {
  await js_arguments_assert(js_defined_is)(arguments);
  let requirements = [_.isNumber(p), await js_number_negative_not_is(p), await js_number_at_most(p, 1)];
  return _.every(await list_where(requirements, js_true_is));
}
