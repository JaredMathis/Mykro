import {list_is} from './list_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function list_remove_try(list) {
  await arguments_assert(list_is)(arguments);
}
