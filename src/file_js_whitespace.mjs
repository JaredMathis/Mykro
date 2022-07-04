
import { noop } from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_js_transform } from "./file_js_transform.mjs";

export async function file_js_whitespace() {
    await arguments_assert()(arguments);

    await file_js_transform(function_name, noop);
}