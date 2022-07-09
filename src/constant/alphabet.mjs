import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
export async function constant_alphabet() {
  await m_js_arguments_assert()(arguments);
  let result = `qwertyuiopasdfghjklzxcvbnm`;
  return result;
}
