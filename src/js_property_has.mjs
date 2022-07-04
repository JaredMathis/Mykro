
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { js_properties } from "./js_properties.mjs";
import { string_is } from "./string_is.mjs";

export async function js_property_has(o, property_name) {
    await arguments_assert(defined_is, string_is)(arguments);
    let properties = await js_properties(o);
    return await list_contains(properties, property_name);
}