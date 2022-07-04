import {arguments_assert} from './arguments_assert.mjs';
import {string_is} from './string_is.mjs';
import {file_js_parse} from './file_js_parse.mjs';
import { es_function_exported } from './es_function_exported.mjs';

export async function file_js_argument_add(function_name, argument_name) {
    arguments_assert(string_is, string_is)(arguments)

    let parsed = await file_js_parse(function_name);
    let function_exported = await es_function_exported(parsed);

    return parsed;
}