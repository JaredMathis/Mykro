import {git_pull} from "./../pull.mjs";
import {git_checkout} from "./../checkout.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../../m/js/string/is.mjs";
export async function git_checkout_pull(branch_name) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  await git_checkout(branch_name);
  await git_pull();
}
