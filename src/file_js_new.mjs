import { not } from "./not.mjs";
import { assert } from "./assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_overwrite } from "./file_overwrite.mjs";

export async function file_js_new(file_path, function_name) {
    let file_path = ``
    await assert(not(file_exists))(file_path)
    file_overwrite(file_path, `export function ${function_name}`)
}