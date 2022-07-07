import {string_is} from './string_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function file_path_dirname(file_path) {
  await arguments_assert(string_is)(arguments);
}
