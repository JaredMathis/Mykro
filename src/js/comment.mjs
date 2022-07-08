import {string_is} from "./../string/is.mjs";
import {arguments_assert} from "./../arguments/assert.mjs";
export async function js_comment(comment) {
  await arguments_assert(string_is)(arguments);
}
