import {string_is} from "./../is.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
export async function string_starts_with(s, prefix) {
  await arguments_assert(string_is, string_is)(arguments);
  let result = s.startsWith(prefix);
  return result;
}
