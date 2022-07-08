import {arguments_assert} from "./../arguments/assert.mjs";
import {string_is} from "./../string/is.mjs";
import fs from "fs";
export async function file_read(file_path) {
  await arguments_assert(string_is)(arguments);
  return await fs.promises.readFile(file_path, "utf8");
}
