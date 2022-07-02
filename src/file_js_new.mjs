import { not } from "./not.mjs";
import { assert } from "./assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_new } from "./file_new.mjs";

export async function file_js_new(file_path) {
    await assert(not(file_exists))(file_path)

    //file_new()
}