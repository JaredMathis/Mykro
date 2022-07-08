import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import path from "path";
import {list_is} from "./../../list/is.mjs";
export async function file_path_join(paths) {
  await js_arguments_assert(list_is)(arguments);
  return path.join(...paths);
}
