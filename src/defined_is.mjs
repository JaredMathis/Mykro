import _ from "lodash";
import {arguments_assert} from "./arguments_assert.mjs";
import {tautology} from "./tautology.mjs";
export async function defined_is(value) {
  await arguments_assert(tautology)(arguments);
  return !_.isUndefined(value);
}
