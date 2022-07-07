import {file_path_dirname} from './file_path_dirname.mjs';
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import fs from 'fs';
import { file_directory_create_if_not_exists } from './file_directory_create_if_not_exists.mjs';
export async function file_move(file_path_from, file_path_to) {
  await arguments_assert(string_is, string_is)(arguments);
  let directory_path = await file_path_dirname(file_path_to)
  await file_directory_create_if_not_exists(directory_path)
  await fs.promises.rename(file_path_from, file_path_to);
}
