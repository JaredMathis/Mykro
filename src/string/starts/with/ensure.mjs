import {string_starts_with} from "./../with.mjs";
import {arguments_assert} from "./../../../arguments/assert.mjs";
import {string_is} from "./../../is.mjs";
export async function string_starts_with_ensure(message, prefix_expected) {
  await arguments_assert(string_is, string_is)(arguments);
  if (!await string_starts_with(message, prefix_expected)) {
    message = prefix_expected + message;
  }
  return message;
}
