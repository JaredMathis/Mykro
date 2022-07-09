import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {command_line} from "./../../../command/line.mjs";
import {m_js_string_is} from "./../../../m/js/string/is.mjs";
export async function msft_vs_code_open(file_path) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  return await command_line(`code ${file_path}`);
}
