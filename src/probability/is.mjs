import _ from "lodash";
import {arguments_assert} from "./../arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {number_at_most} from "./../number/at/most.mjs";
import {number_negative_not_is} from "./../number/negative/not/is.mjs";
import {list_where} from "./../list/where.mjs";
import {false_is} from "./../false/is.mjs";
import {true_is} from "./../true/is.mjs";
export async function probability_is(p) {
  await arguments_assert(defined_is)(arguments);
  let requirements = [_.isNumber(p), await number_negative_not_is(p), await number_at_most(p, 1)];
  return _.every(await list_where(requirements, true_is));
}
