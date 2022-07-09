import {file_js_all_function_names} from "./../function/names.mjs";
import {m_js_error} from "./../../../../m/js/error.mjs";
import {file_js_run} from "./../../run.mjs";
import {m_js_for_each} from "./../../../../m/js/for/each.mjs";
import {noop} from "./../../../../noop.mjs";
import {m_js_log_error} from "./../../../../m/js/log/error.mjs";
import {list_starting_at} from "./../../../../list/starting/at.mjs";
import {list_add_all} from "./../../../../list/add/all.mjs";
export async function file_js_all_for_each() {
  let function_names = await file_js_all_function_names();
  await file_js_all_for_each_generic(function_names, arguments);
}

