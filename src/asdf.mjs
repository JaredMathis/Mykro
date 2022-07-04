import {number_is} from './number_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function asdf(x) {
  await arguments_assert(number_is)(arguments);
}
