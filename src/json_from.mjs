import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function json_from(unparsed) {
  await arguments_assert(string_is)(arguments);
  return JSON.parse(unparsed);
}
