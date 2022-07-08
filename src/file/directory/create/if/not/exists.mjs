import {string_is} from "./../../../../../string/is.mjs";
import {arguments_assert} from "./../../../../../arguments/assert.mjs";
import fs from "fs";
import {file_exists} from "./../../../../exists.mjs";
export async function file_directory_create_if_not_exists(directory_path) {
  await arguments_assert(string_is)(arguments);
  if (!await file_exists(directory_path)) {
    await fs.promises.mkdir(directory_path, {
      recursive: true
    });
  }
}
