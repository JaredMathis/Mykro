import path from "path";
import {arguments_assert} from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";
export async function file_path_resolve(file_path) {
  await arguments_assert(string_is)(arguments);
  return path.resolve(file_path);
}
