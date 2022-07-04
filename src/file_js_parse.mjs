
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";
import { file_read } from "./file_read.mjs";

export async function file_js_parse(file_path) {
    await arguments_assert(string_is)(arguments);
    
    let unparsed = await file_read(file_path);
    let parsed = await es_parse(unparsed);
    return parsed;
}