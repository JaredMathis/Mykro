import {js_arguments_assert} from "./../js/arguments/assert.mjs";
export async function constant_mykro() {
  await js_arguments_assert()(arguments);
  let result = `mykro`;
  return result;
}
