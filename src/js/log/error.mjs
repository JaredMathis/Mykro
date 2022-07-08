import {js_arguments_assert} from "./../arguments/assert.mjs";
import "colors";
import {js_defined_is} from "./../defined/is.mjs";
export async function js_log_error(e) {
  await js_arguments_assert(js_defined_is)(arguments);
  console.log(e.stack.red);
}
