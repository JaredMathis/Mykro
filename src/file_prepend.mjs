import {arguments_assert} from "./arguments_assert.mjs";
import {string_is} from "./string_is.mjs";
import {file_overwrite} from "./file_overwrite.mjs";
import {file_read} from "./file_read.mjs";
export async function file_prepend(file_path, text_prepend) {
  await arguments_assert(string_is, string_is)(arguments);
  let existing = await file_read(file_path);
  let replacement = text_prepend + existing;
  await file_overwrite(file_path, replacement);
}
