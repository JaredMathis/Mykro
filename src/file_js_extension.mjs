
import { arguments_assert } from "./arguments_assert.mjs";

export async function file_js_extension() {
    await arguments_assert()(arguments);
    return ".mjs";
}