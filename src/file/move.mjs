import {file_path_dirname} from "./path/dirname.mjs";
import {js_string_is} from "./../js/string/is.mjs";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import fs from "fs";
import {file_directory_create_if_not_exists} from "./directory/create/if/not/exists.mjs";
export async function file_move(file_path_from, file_path_to) {
  await js_arguments_assert(js_string_is, js_string_is)(arguments);
  let directory_path = await file_path_dirname(file_path_to);
  await file_directory_create_if_not_exists(directory_path);
  await fs.promises.rename(file_path_from, file_path_to);
}
