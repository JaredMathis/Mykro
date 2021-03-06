import {m_js_log_error} from "./../../../../../m/js/log/error.mjs";
import {noop} from "./../../../../../noop.mjs";
import {m_js_error} from "./../../../../../m/js/error.mjs";
import {list_add_all} from "./../../../../../list/add/all.mjs";
import {file_js_run} from "./../../../run.mjs";
import {m_js_for_each} from "./../../../../../m/js/for/each.mjs";
import {list_starting_at} from "./../../../../../list/starting/at.mjs";
import {list_is} from "./../../../../../list/is.mjs";
import {m_js_defined_is} from "./../../../../../m/js/defined/is.mjs";
import {m_js_arguments_assert} from "./../../../../../m/js/arguments/assert.mjs";
export async function file_js_all_for_each_generic(function_names, _arguments) {
  await m_js_arguments_assert(list_is, m_js_defined_is)(arguments);
  let function_name = _arguments[0];
  let remaining = await list_starting_at(Array.from(_arguments), 1);
  await m_js_for_each(function_names, async function_name_other => {
    await file_js_run(function_name, await list_add_all([function_name_other], remaining), m_js_error, noop, m_js_log_error, m_js_error, noop);
  });
}
