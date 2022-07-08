import _ from "lodash";
import {js_arguments_assert} from "./../arguments/assert.mjs";
import {tautology} from "./../../tautology.mjs";
export async function js_defined_is(value) {
  await js_arguments_assert(tautology)(arguments);
  return !_.isUndefined(value);
}
