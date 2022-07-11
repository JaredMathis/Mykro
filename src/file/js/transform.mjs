import {es_unparse} from "./../../es/unparse.mjs";
import {file_js_parse} from "./parse.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_function_is} from "./../../m/js/function/is.mjs";
import {m_js_string_identifier_is} from "./../../m/js/string/identifier/is.mjs";
import {m_js_equals} from "./../../m/js/equals.mjs";
import {m_js_comment} from "./../../m/js/comment.mjs";
import {file_overwrite_if_changed} from "./../overwrite/if/changed.mjs";
export async function file_js_transform(function_name, transformer) {
  await m_js_arguments_assert(m_js_string_identifier_is, m_js_function_is)(arguments);
  let {ast, unparsed, file_path} = await file_js_parse(function_name);
  await transformer(ast);
  let text = await es_unparse(ast);
  if (m_js_equals(text, unparsed)) {
    await m_js_comment(`There were no changes to the AST, so we're returning rather than saving`);
    return;
  }
  await file_overwrite_if_changed(file_path, text);
}
