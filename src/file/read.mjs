import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../m/js/string/is.mjs";
import fs from "fs";
export async function file_read(file_path) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  return await fs.promises.readFile(file_path, "utf8");
}
