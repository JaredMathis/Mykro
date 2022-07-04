
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";

export async function es_exports() {
    await arguments_assert()(arguments);
    
    let body = await property_get(parsed, 'body');
    return body;
}