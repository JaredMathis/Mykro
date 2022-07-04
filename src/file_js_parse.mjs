
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";
import { file_read } from "./file_read.mjs";
import { file_js_name_to_path } from "./file_js_name_to_path.mjs";
import { es_parse } from "./es_parse.mjs";

export async function file_js_parse(function_name) {
    await arguments_assert(string_is)(arguments);
    
    let file_path = await file_js_name_to_path(function_name);
    let unparsed = await file_read(file_path);
    let parsed = await es_parse(unparsed);
    return parsed;
}