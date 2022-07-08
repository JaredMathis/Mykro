import {list_is} from "./list_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function string_from_list(list) {
  await arguments_assert(list_is)(arguments);
  return list.join("");
}
