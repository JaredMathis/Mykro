import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { string_identifier_is } from "./string_identifier_is.mjs";
export async function file_js_imports_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);

  let ast = await file_js_parse(function_name);

  return ast;
  
}
