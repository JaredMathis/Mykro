import {arguments_assert} from "./arguments_assert.mjs";
import {string_is} from "./string_is.mjs";
import {file_overwrite} from "./file_overwrite.mjs";
export async function file_new(file_path) {
  await arguments_assert(string_is)(arguments);
  await file_overwrite(file_path, "");
}
