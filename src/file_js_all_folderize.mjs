
import { arguments_assert } from "./arguments_assert.mjs";
import { file_js_all_for_each } from "./file_js_all_for_each.mjs";
import { file_js_folderize } from "./file_js_folderize.mjs";
import { file_js_imports_fix } from "./file_js_imports_fix.mjs";

export async function file_js_all_folderize() {
    await arguments_assert()(arguments);
    
    await file_js_all_for_each(file_js_folderize.name);
    await file_js_all_for_each(file_js_imports_fix.name);
}