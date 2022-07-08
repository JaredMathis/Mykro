import {arguments_assert} from "./../arguments/assert.mjs";
export async function constant_alphabet() {
  await arguments_assert()(arguments);
  let result = `qwertyuiopasdfghjklzxcvbnm`;
  return result;
}
