import {js_string_starts_with} from "./../with.mjs";
import {js_arguments_assert} from "./../../../arguments/assert.mjs";
import {js_string_is} from "./../../is.mjs";
export async function js_string_starts_with_ensure(message, prefix_expected) {
  await js_arguments_assert(js_string_is, js_string_is)(arguments);
  if (!await js_string_starts_with(message, prefix_expected)) {
    message = prefix_expected + message;
  }
  return message;
}
