import {arguments_assert} from "./arguments_assert.mjs";
export async function constant_mykro() {
  await arguments_assert()(arguments);
  let result = `mykro`;
  return result;
}
