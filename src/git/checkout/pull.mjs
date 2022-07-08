import {git_pull} from "./../pull.mjs";
import {git_checkout} from "./../checkout.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {js_string_is} from "./../../js/string/is.mjs";
export async function git_checkout_pull(branch_name) {
  await js_arguments_assert(js_string_is)(arguments);
  await git_checkout(branch_name);
  await git_pull();
}
