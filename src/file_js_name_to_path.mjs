import {arguments_assert} from "./arguments_assert.mjs";
import {string_is} from "./string_is.mjs";
import path from "path";
import {directory_get} from "./directory_get.mjs";
export async function file_js_name_to_path(function_name) {
  await arguments_assert(string_is)(arguments);
  return path.join(directory_get(), `${function_name}.mjs`);
}
