import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {command_line} from "./../../../command/line.mjs";
import {js_string_is} from "./../../../js/string/is.mjs";
export async function msft_vs_code_open(file_path) {
  await js_arguments_assert(js_string_is)(arguments);
  return await command_line(`code ${file_path}`);
}
