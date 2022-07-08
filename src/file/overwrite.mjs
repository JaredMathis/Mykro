import fs from "fs";
import {string_is} from "./../string/is.mjs";
import {arguments_assert} from "./../arguments/assert.mjs";
import {file_path_dirname} from "./path/dirname.mjs";
import {file_directory_create_if_not_exists} from "./directory/create/if/not/exists.mjs";
export async function file_overwrite(file_path, text) {
  await arguments_assert(string_is, string_is)(arguments);
  let directory_path = await file_path_dirname(file_path);
  await file_directory_create_if_not_exists(directory_path);
  await fs.promises.writeFile(file_path, text);
}
