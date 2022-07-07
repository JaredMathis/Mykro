import {string_is} from './string_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import path from 'path'
export async function file_path_dirname(file_path) {
  await arguments_assert(string_is)(arguments);
  return path.dirname(file_path)
}
