
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { equals } from "./equals.mjs";
import { json_to } from "./json_to.mjs";

export async function equals_json(a, b) {
    await arguments_assert(defined_is, defined_is)(arguments);
    return equals(json_to(a), json_to(b));
}