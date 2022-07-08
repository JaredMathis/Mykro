import {string_is} from './string_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function string_prefix_remove(input) {
  await arguments_assert(string_is)(arguments);
}
