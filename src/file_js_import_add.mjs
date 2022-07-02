import { arguments_assert } from "./arguments_assert.mjs"
import { string_is } from "./string_is.mjs"

export function file_js_import_add(import_name) {
    arguments_assert(string_is)(arguments);
    
    // TODO
    file_prepend(`
import ${import_name} from '${import_name}';    
`)
}