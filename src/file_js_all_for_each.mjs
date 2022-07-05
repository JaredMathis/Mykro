import {error} from "./error.mjs";
import {file_js_run} from "./file_js_run.mjs";
import {file_js_all} from "./file_js_all.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {for_each} from "./for_each.mjs";
import {noop} from "./noop.mjs";
import {js_log_error} from "./js_log_error.mjs";
export async function file_js_all_for_each(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let files = await file_js_all();
  await for_each(files, async file => {
    await file_js_run(function_name, [file.name], error, noop, js_log_error, error);
  });
}
