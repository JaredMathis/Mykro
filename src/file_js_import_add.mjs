import { arguments_assert } from "./arguments_assert.mjs"
import { file_prepend } from "./file_prepend.mjs";
import { string_is } from "./string_is.mjs"

export function file_js_import_add(file_path, import_name) {
    arguments_assert(string_is, string_is)(arguments);
    
    // TODO
    file_prepend(file_path, `import ${import_name} from '${import_name}';    
`)
}