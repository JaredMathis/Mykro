import {arguments_assert} from './arguments_assert.mjs';
import {string_is} from './string_is.mjs';
import {file_js_parse} from './file_js_parse.mjs';
import { es_function_exported } from './es_function_exported.mjs';
import { property_get } from './property_get.mjs';
import { string_identifier_is } from './string_identifier_is.mjs';
import { list_add } from './list_add.mjs';
import { list_where } from './list_where.mjs';
import { list_size } from './list_size.mjs';
import { assert } from './assert.mjs';
import { equals } from './equals.mjs';

export async function file_js_argument_add(function_name, argument_name, argument_type) {
    await arguments_assert(string_is, string_identifier_is, string_is)(arguments)

    let parsed = await file_js_parse(function_name);
    let function_exported = await es_function_exported(parsed);

    let declaration = await property_get(function_exported, 'declaration');
    await es_function_declaration_param_add(declaration, argument_name);

    let body = await property_get(declaration, 'body');
    let body_block = await property_get(body, 'body');
    let statement_first = await list_first(body_block);
    await assert(equals)(await property_get(statement_first, 'type'), 'ExpressionStatement')

    return statement_first;
}

async function es_function_declaration_param_add(declaration, argument_name) {
    let params = await property_get(declaration, 'params');

    let existing = await list_where(
        params, 
        p => p.type === 'Identifier' && p.name === argument_name);

    await assert(equals)(await list_size(existing), 0)

    await list_add(params, { type: 'Identifier', name: argument_name });
}
