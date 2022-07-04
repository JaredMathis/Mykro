
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { property_get } from "./property_get.mjs";

export async function es_function_exported(parsed) {
    await arguments_assert(defined_is)(arguments);

    let exports = es_exports(parsed);
    
    let body = await property_get(parsed, 'body');
    return body;
}