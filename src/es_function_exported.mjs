
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";

export async function es_function_exported() {
    await arguments_assert(defined_is)(arguments);
    
}