import {npm_install_latest} from "./../latest.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
export async function npm_install_latest_mykro() {
  await js_arguments_assert()(arguments);
  await npm_install_latest(`mykro`);
}
