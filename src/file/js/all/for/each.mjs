import {error} from "./../../../../error.mjs";
import {file_js_run} from "./../../../../file_js_run.mjs";
import {file_js_all} from "./../../all.mjs";
import {string_identifier_is} from "./../../../../string_identifier_is.mjs";
import {arguments_assert} from "./../../../../arguments/assert.mjs";
import {for_each} from "./../../../../for_each.mjs";
import {noop} from "./../../../../noop.mjs";
import {js_log_error} from "./../../../../js_log_error.mjs";
import {list_starting_at} from "./../../../../list_starting_at.mjs";
import {list_add_all} from "./../../../../list_add_all.mjs";
export async function file_js_all_for_each() {
  let function_name = arguments[0];
  let remaining = await list_starting_at(Array.from(arguments), 1);
  let files = await file_js_all();
  await for_each(files, async file => {
    await file_js_run(function_name, await list_add_all([file.name], remaining), error, noop, js_log_error, error, noop);
  });
}
