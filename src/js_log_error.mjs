import {arguments_assert} from "./arguments_assert.mjs";
export async function js_log_error(e) {
  await arguments_assert(defined_is)(arguments);
  console.log(e.stack.red);
}
