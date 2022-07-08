import {noop} from "./../../noop.mjs";
import {string_identifier_is} from "./../../string/identifier/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {file_js_transform} from "./transform.mjs";
export async function file_js_whitespace(function_name) {
  await js_arguments_assert(string_identifier_is)(arguments);
  await file_js_transform(function_name, noop);
}
