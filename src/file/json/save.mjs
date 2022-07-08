import {file_overwrite} from "./../overwrite.mjs";
import {json_to} from "./../../json/to.mjs";
import {js_string_is} from "./../../js/string/is.mjs";
import {js_defined_is} from "./../../js/defined/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function file_json_save(value, file_path) {
  await js_arguments_assert(js_defined_is, js_string_is)(arguments);
  let json = await json_to(value);
  await file_overwrite(file_path, json);
}
