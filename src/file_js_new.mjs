import { not } from "./not.mjs";

export function file_js_new(file_path) {
    assert(not(file_exists))(file_path)
}