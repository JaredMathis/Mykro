import {file_js_all_function_names} from "./../function/names.mjs";
import {js_error} from "./../../../../js/error.mjs";
import {file_js_run} from "./../../run.mjs";
import {file_js_all} from "./../../all.mjs";
import {js_string_identifier_is} from "./../../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
import {js_for_each} from "./../../../../js/for/each.mjs";
import {noop} from "./../../../../noop.mjs";
import {js_log_error} from "./../../../../js/log/error.mjs";
import {list_starting_at} from "./../../../../list/starting/at.mjs";
import {list_add_all} from "./../../../../list/add/all.mjs";
export async function file_js_all_for_each() {
  let function_name = arguments[0];
  let remaining = await list_starting_at(Array.from(arguments), 1);
  let function_names = await file_js_all_function_names();
  await js_for_each(function_names, async function_name_other => {
    await file_js_run(function_name, await list_add_all([function_name_other], remaining), js_error, noop, js_log_error, js_error, noop);
  });
}
