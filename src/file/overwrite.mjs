import fs from "fs";
import {m_js_string_is} from "./../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {file_path_dirname} from "./path/dirname.mjs";
import {file_directory_create_if_not_exists} from "./directory/create/if/not/exists.mjs";
export async function file_overwrite(file_path, text) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  let directory_path = await file_path_dirname(file_path);
  await file_directory_create_if_not_exists(directory_path);
  await fs.promises.writeFile(file_path, text);
}
