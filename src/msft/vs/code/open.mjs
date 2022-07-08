import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {command_line} from "./../../../command/line.mjs";
import {string_is} from "./../../../string/is.mjs";
export async function msft_vs_code_open(file_path) {
  await js_arguments_assert(string_is)(arguments);
  return await command_line(`code ${file_path}`);
}
