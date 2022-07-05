import {file_js_all} from './file_js_all.mjs';
import {file_js_all_for_each} from './file_js_all_for_each.mjs';

import { arguments_assert } from "./arguments_assert.mjs";
import { for_each } from './for_each.mjs';

export async function file_js_all_identifiers_get() {
    await arguments_assert()(arguments);
    
    let files = await file_js_all();
    await for_each(files, async file => {
        console.log(file);
    })
}