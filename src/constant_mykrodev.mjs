import {arguments_assert} from "./arguments_assert.mjs";
export async function constant_mykrodev() {
  await arguments_assert()(arguments);
  let result = `mykrodev`;
  return result;
}
