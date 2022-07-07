import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function string_join(input, join_by) {
  await arguments_assert(string_is, string_is)(arguments);
  return input.join(join_by)
}
