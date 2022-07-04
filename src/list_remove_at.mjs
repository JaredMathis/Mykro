import {arguments_assert} from "./arguments_assert.mjs";
export async function list_remove_at(list, index) {
  await arguments_assert(list_is, number_is)(arguments);
}
