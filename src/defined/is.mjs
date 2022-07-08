import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {tautology} from "./../tautology.mjs";
export async function defined_is(value) {
  await js_arguments_assert(tautology)(arguments);
  return !_.isUndefined(value);
}
