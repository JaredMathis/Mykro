import {file_js_all_for_each} from './file_js_all_for_each.mjs';

import { arguments_assert } from "./arguments_assert.mjs";

export async function file_js_all_identifiers_get() {
    await arguments_assert()(arguments);
    
    await file_js_all_for_each()
}