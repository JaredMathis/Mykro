import { arguments_assert } from "./arguments_assert.mjs"
import { file_js_name_to_path } from "./file_js_name_to_path.mjs";
import { file_prepend } from "./file_prepend.mjs";
import { string_is } from "./string_is.mjs"

export async function file_js_import_add(function_name, import_name) {
    await arguments_assert(string_is, string_is)(arguments);
    let file_path = await file_js_name_to_path(function_name);

    // TODO
    await file_prepend(
        file_path, 
        `import ${import_name} from '${import_name}';    
`)
}