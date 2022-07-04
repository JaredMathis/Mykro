import {arguments_assert} from './arguments_assert.mjs';
import {string_is} from './string_is.mjs';
import { property_get } from './property_get.mjs';
import { string_identifier_is } from './string_identifier_is.mjs';
import { list_add } from './list_add.mjs';
import { list_where } from './list_where.mjs';
import { list_size } from './list_size.mjs';
import { assert } from './assert.mjs';
import { equals } from './equals.mjs';
import { file_js_arguments_transform } from './file_js_arguments_transform.mjs';

export async function file_js_argument_add(function_name, argument_name, argument_type) {
    await arguments_assert(string_is, string_identifier_is, string_is)(arguments)

    await file_js_arguments_transform(function_name, async _arguments => {
        let {
            declaration,
            awaited_first_callee_arguments
        } = _arguments;
        await es_function_declaration_param_add(declaration, argument_name);
        await list_add(awaited_first_callee_arguments, es_identifier(argument_type))
    })
}

async function es_function_declaration_param_add(declaration, argument_name) {
    let { existing, params } = await es_function_declaration_param_get(declaration, argument_name);

    await assert(equals)(await list_size(existing), 0)

    let id = es_identifier(argument_name);
    await list_add(params, id);
}
async function es_function_declaration_param_get(declaration, argument_name) {
    let params = await property_get(declaration, 'params');

    let existing = await list_where(
        params,
        p => p.type === 'Identifier' && p.name === argument_name);
    return { existing, params };
}

function es_identifier(identifier_name) {
    return { type: 'Identifier', name: identifier_name };
}

