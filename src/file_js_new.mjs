import { not } from "./not.mjs";
import { assert } from "./assert.mjs";
import { file_exists } from "./file_exists.mjs";

export function file_js_new(file_path) {
    assert(not(file_exists))(file_path)
}