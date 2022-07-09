import {npm_install_latest} from "./../latest.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function npm_install_latest_mykro() {
  await m_js_arguments_assert()(arguments);
  await npm_install_latest(`mykro`);
}
