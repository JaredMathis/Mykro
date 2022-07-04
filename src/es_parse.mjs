
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";

export async function es_parse(unparsed) {
    await arguments_assert(string_is)(arguments);
}