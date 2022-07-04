import {equals} from './equals.mjs';
import {list_size} from './list_size.mjs';
import { arguments_assert } from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";
import { string_identifier_is } from "./string_identifier_is.mjs";

export async function file_js_run(function_name, _arguments, on_no_matches, on_success, on_error, on_multiple_matches) {
    await arguments_assert(string_identifier_is, list_is, _.isFunction, _.isFunction, _.isFunction, _.isFunction)(arguments);
    let matches = await run_line_search(function_name);
    let matches_count = await list_size(matches);

    if (equals(matches_count, 0)) {
        await on_no_matches();

    } else if (equals(matches_count, 1)) {
        let match = matches[0];

        let import_path = path.resolve(match.file_path);
        console.log(import_path.blue);
        let imported = await import("file://" + import_path);
        let _function = imported[match.name];
        try {
            let result = await _function(..._arguments);
            await on_success(result);
        } catch (e) {
            await on_error(e);
        }
    } else {
        await on_multiple_matches(matches);
    }
}