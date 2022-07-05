import {arguments_assert} from "./arguments_assert.mjs";
import "colors";
import { defined_is } from "./defined_is.mjs";
export async function js_log_error(e) {
  await arguments_assert(defined_is)(arguments);
  console.log(e.stack.red);
}
