import {arguments_assert} from "./../../arguments/assert.mjs";
import {string_is} from "./../is.mjs";
import {string_split} from "./../split.mjs";
export async function string_to_list(value) {
  await arguments_assert(string_is)(arguments);
  let result = await string_split(value, "");
  return result;
}
