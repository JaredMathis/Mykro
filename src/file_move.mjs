import {string_is} from './string_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function file_move(file_path_from) {
  await arguments_assert(string_is)(arguments);
}
