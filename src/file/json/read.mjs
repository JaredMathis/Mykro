import {json_from} from "./../../json/from.mjs";
import {file_read} from "./../read.mjs";
import {js_string_is} from "./../../js/string/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function file_json_read(file_path) {
  await js_arguments_assert(js_string_is)(arguments);
  let unparsed = await file_read(file_path);
  let parsed = await json_from(unparsed);
  return parsed;
}
