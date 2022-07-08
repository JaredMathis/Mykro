import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {number_at_most} from "./../number/at/most.mjs";
import {number_negative_not_is} from "./../number/negative/not/is.mjs";
import {list_where} from "./../list/where.mjs";
import {js_false_is} from "./../js/false/is.mjs";
import {js_true_is} from "./../js/true/is.mjs";
export async function probability_is(p) {
  await js_arguments_assert(defined_is)(arguments);
  let requirements = [_.isNumber(p), await number_negative_not_is(p), await number_at_most(p, 1)];
  return _.every(await list_where(requirements, js_true_is));
}
