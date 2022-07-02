import { not } from "./not.mjs";
import { assert } from "./assert.mjs";

export function file_js_new(file_path) {
    assert(not(file_exists))(file_path)
}