import {defined_is} from './defined_is.mjs';
import {list_is} from "./list_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function list_remove_try(list, item) {
  await arguments_assert(list_is, defined_is)(arguments);
}
