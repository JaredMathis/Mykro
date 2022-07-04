import arguments_assert from './arguments_assert.mjs';
import string_is from './string_is.mjs';
import file_js_parse from './file_js_parse.mjs';

export function file_js_argument_add(file_path, argument_name) {
    arguments_assert(string_is, string_is)(arguments)

    let parsed = await file_js_parse(file_path);

    
}