import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {command_line} from "./../command/line.mjs";
import {m_js_string_is} from "./../m/js/string/is.mjs";
export async function npm_uninstall(package_name) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  await command_line(`npm uninstall ${package_name}`);
}
