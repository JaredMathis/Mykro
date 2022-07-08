import {error} from "./../../../../error.mjs";
import {file_js_run} from "./../../run.mjs";
import {file_js_all} from "./../../all.mjs";
import {string_identifier_is} from "./../../../../string/identifier/is.mjs";
import {arguments_assert} from "./../../../../arguments/assert.mjs";
import {for_each} from "./../../../../for/each.mjs";
import {noop} from "./../../../../noop.mjs";
import {js_log_error} from "./../../../../js/log/error.mjs";
import {list_starting_at} from "./../../../../list/starting/at.mjs";
import {list_add_all} from "./../../../../list/add/all.mjs";
export async function file_js_all_for_each() {
  let function_name = arguments[0];
  let remaining = await list_starting_at(Array.from(arguments), 1);
  let files = await file_js_all();
  await for_each(files, async file => {
    await file_js_run(function_name, await list_add_all([file.name], remaining), error, noop, js_log_error, error, noop);
  });
}
