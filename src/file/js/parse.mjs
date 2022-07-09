import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../../m/js/string/is.mjs";
import {file_read} from "./../read.mjs";
import {file_js_all_match_exact} from "./all/match/exact.mjs";
import {es_parse} from "./../../es/parse.mjs";
export async function file_js_parse(function_name) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
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
