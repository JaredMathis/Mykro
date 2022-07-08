import {string_is} from "./../string/is.mjs";
import {js_arguments_assert} from "./arguments/assert.mjs";
export async function js_comment(comment) {
  await js_arguments_assert(string_is)(arguments);
}
