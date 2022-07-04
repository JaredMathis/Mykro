import fs from "fs";
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function file_overwrite(file_path, text) {
  await arguments_assert(string_is, string_is)(arguments);
  await fs.promises.writeFile(file_path, text);
}
