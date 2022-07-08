
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";
import path from 'path'
export async function file_path_normalize(file_path) {
    await arguments_assert(string_is)(arguments);
    return path.normalize(file_path)
}