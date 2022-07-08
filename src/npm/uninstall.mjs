import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {command_line} from "./../command/line.mjs";
import {js_string_is} from "./../js/string/is.mjs";
export async function npm_uninstall(package_name) {
  await js_arguments_assert(js_string_is)(arguments);
  await command_line(`npm uninstall ${package_name}`);
}
