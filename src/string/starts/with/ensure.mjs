import {string_starts_with} from "./../with.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {string_is} from "./../../is.mjs";
export async function string_starts_with_ensure(message, prefix_expected) {
  await js_arguments_assert(string_is, string_is)(arguments);
  if (!await string_starts_with(message, prefix_expected)) {
    message = prefix_expected + message;
  }
  return message;
}
