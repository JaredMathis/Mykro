import {arguments_assert} from "./../arguments/assert.mjs";
import {command_line} from "./../command/line.mjs";
import {string_is} from "./../string/is.mjs";
export async function npm_uninstall(package_name) {
  await arguments_assert(string_is)(arguments);
  await command_line(`npm uninstall ${package_name}`);
}
