import {m_js_string_is} from "./../../../../../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../../../../m/js/arguments/assert.mjs";
import fs from "fs";
import {file_exists} from "./../../../../exists.mjs";
export async function file_directory_create_if_not_exists(directory_path) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  if (!await file_exists(directory_path)) {
    await fs.promises.mkdir(directory_path, {
      recursive: true
    });
  }
}
