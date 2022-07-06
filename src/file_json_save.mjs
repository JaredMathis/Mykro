import {file_overwrite} from "./file_overwrite.mjs";
import {json_to} from "./json_to.mjs";
import {string_is} from "./string_is.mjs";
import {defined_is} from "./defined_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function file_json_save(value, file_path) {
  await arguments_assert(defined_is, string_is)(arguments);
  let json = await json_to(value);
  await file_overwrite(file_path, json);
}
