import {file_overwrite} from "./file_overwrite.mjs";
import {file_js_name_to_path} from "./file_js_name_to_path.mjs";
import {es_unparse} from "./es_unparse.mjs";
import {file_js_parse} from "./file_js_parse.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {js_function_is} from "./js_function_is.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {equals} from "./equals.mjs";
import {js_comment} from "./js_comment.mjs";
export async function file_js_transform(function_name, transformer) {
  await arguments_assert(string_identifier_is, js_function_is)(arguments);
  let {ast, unparsed} = await file_js_parse(function_name);
  await transformer(ast);
  let text = await es_unparse(ast);
  if (equals(text, unparsed)) {
    await js_comment(`There were no changes to the AST, so we're returning rather than saving`);
    return;
  }
  let file_path = await file_js_name_to_path(function_name);
  await file_overwrite(file_path, text);
}
