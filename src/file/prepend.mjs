import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_string_is} from "./../js/string/is.mjs";
import {file_overwrite} from "./overwrite.mjs";
import {file_read} from "./read.mjs";
export async function file_prepend(file_path, text_prepend) {
  await js_arguments_assert(js_string_is, js_string_is)(arguments);
  let existing = await file_read(file_path);
  let replacement = text_prepend + existing;
  await file_overwrite(file_path, replacement);
}
