import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_string_is} from "./../js/string/is.mjs";
import fs from "fs";
export async function file_read(file_path) {
  await js_arguments_assert(js_string_is)(arguments);
  return await fs.promises.readFile(file_path, "utf8");
}
