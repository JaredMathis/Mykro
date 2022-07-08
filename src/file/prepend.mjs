import {arguments_assert} from "./../arguments/assert.mjs";
import {string_is} from "./../string/is.mjs";
import {file_overwrite} from "./overwrite.mjs";
import {file_read} from "./read.mjs";
export async function file_prepend(file_path, text_prepend) {
  await arguments_assert(string_is, string_is)(arguments);
  let existing = await file_read(file_path);
  let replacement = text_prepend + existing;
  await file_overwrite(file_path, replacement);
}
