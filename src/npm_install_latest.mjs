import {arguments_assert} from "./arguments_assert.mjs";
import {command_line} from "./command_line.mjs";
import {string_is} from "./string_is.mjs";
export async function npm_install(package_name) {
  await arguments_assert(string_is)(arguments);
  await command_line(`npm i ${package_name}@latest`);
}
