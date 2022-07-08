import {arguments_assert} from "./../../arguments/assert.mjs";
import path from "path";
import {list_is} from "./../../list/is.mjs";
export async function file_path_join(paths) {
  await arguments_assert(list_is)(arguments);
  return path.join(...paths);
}
