import {json_from} from "./../../json/from.mjs";
import {file_read} from "./../read.mjs";
import {string_is} from "./../../string/is.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
export async function file_json_read(file_path) {
  await arguments_assert(string_is)(arguments);
  let unparsed = await file_read(file_path);
  let parsed = await json_from(unparsed);
  return parsed;
}