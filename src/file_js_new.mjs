import { not } from "./not.mjs";
import { assert } from "./assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { directory_get } from "./directory_get.mjs";
import path from 'path'
import { git_acp } from "./git_acp.mjs";
import { command_line } from "./command_line.mjs";

export async function file_js_new(function_name) {
    let file_path = file_js_name_to_path(function_name);
    await assert(not(file_exists))(file_path)
    await file_overwrite(file_path, `
import { arguments_assert } from "./arguments_assert.mjs";

export async function ${function_name}() {
    await arguments_assert()(arguments);
    // TODO
}`)
    await git_acp(`${file_js_new.name} ${function_name}`);
    await command_line(`code ${file_path}`);
}

function file_js_name_to_path(function_name) {
    return path.join(
        directory_get(),
        `${function_name}.mjs`);
}
