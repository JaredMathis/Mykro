import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
export async function file_js_identifiers_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let ast = await file_js_parse(function_name);
  
}
