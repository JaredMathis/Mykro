import {file_overwrite} from "./../overwrite.mjs";
import {json_to} from "./../../json/to.mjs";
import {string_is} from "./../../string/is.mjs";
import {defined_is} from "./../../defined/is.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
export async function file_json_save(value, file_path) {
  await arguments_assert(defined_is, string_is)(arguments);
  let json = await json_to(value);
  await file_overwrite(file_path, json);
}
