import _ from "lodash";
import {js_arguments_assert} from "./../arguments/assert.mjs";
import {js_tautology} from "./../tautology.mjs";
export async function js_defined_is(value) {
  await js_arguments_assert(js_tautology)(arguments);
  return !_.isUndefined(value);
}
