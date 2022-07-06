import {list_is} from './list_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function list_index_last(list) {
  await arguments_assert(list_is)(arguments);
}
