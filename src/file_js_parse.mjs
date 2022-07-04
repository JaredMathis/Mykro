
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";
import {Parser} from "acorn"

export async function file_js_parse(file_path) {
    await arguments_assert(string_is)(arguments);
    // TODO
}