import {arguments_assert} from "./../../arguments/assert.mjs";
import {string_is} from "./../../string_is.mjs";
import {file_read} from "./../../file_read.mjs";
import {file_js_all_match_exact} from "./all/match/exact.mjs";
import {es_parse} from "./../../es/parse.mjs";
export async function file_js_parse(function_name) {
  await arguments_assert(string_is)(arguments);
  let match = await file_js_all_match_exact(function_name);
  let {file_path} = match;
  let unparsed = await file_read(file_path);
  let ast = await es_parse(unparsed);
  return {
    ast,
    unparsed,
    file_path
  };
}
