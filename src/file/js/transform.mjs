import {file_overwrite} from "./../overwrite.mjs";
import {es_unparse} from "./../../es/unparse.mjs";
import {file_js_parse} from "./parse.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {js_function_is} from "./../../js/function/is.mjs";
import {string_identifier_is} from "./../../string/identifier/is.mjs";
import {equals} from "./../../equals.mjs";
import {js_comment} from "./../../js/comment.mjs";
export async function file_js_transform(function_name, transformer) {
  await js_arguments_assert(string_identifier_is, js_function_is)(arguments);
  let {ast, unparsed, file_path} = await file_js_parse(function_name);
  await transformer(ast);
  let text = await es_unparse(ast);
  if (equals(text, unparsed)) {
    await js_comment(`There were no changes to the AST, so we're returning rather than saving`);
    return;
  }
  await file_overwrite(file_path, text);
}
