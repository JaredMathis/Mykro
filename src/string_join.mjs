import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";
export async function string_join(input, join_by) {
  await arguments_assert(list_is, string_is)(arguments);
  return input.join(join_by)
}
