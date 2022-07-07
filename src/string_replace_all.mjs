import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function string_replace_all(input, search, replacement) {
  await arguments_assert(string_is, string_is, string_is)(arguments);
}
