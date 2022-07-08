import {js_arguments_assert} from "./../js/arguments/assert.mjs";
export async function constant_alphabet() {
  await js_arguments_assert()(arguments);
  let result = `qwertyuiopasdfghjklzxcvbnm`;
  return result;
}
