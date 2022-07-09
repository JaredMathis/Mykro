import {command_line} from "./../command/line.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../m/js/string/is.mjs";
export async function git_commit(message) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  return await command_line(`git commit -m "${message}"`);
}
