import {m_js_not} from "./../../../m/js/not.mjs";
import {m_js_string_is} from "./../../../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {m_js_assert} from "./../../../m/js/assert.mjs";
import {list_contains} from "./../../../list/contains.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {m_js_equals} from "./../../../m/js/equals.mjs";
import {file_js_identifiers_get} from "./../identifiers/get.mjs";
import {file_js_transform_ast} from "./../transform/ast.mjs";
export async function file_js_identifier_rename(function_name, name_from, name_to) {
  await m_js_arguments_assert(m_js_string_identifier_is, m_js_string_is, m_js_string_is)(arguments);
  let identifiers = await file_js_identifiers_get(function_name);
  await m_js_assert(m_js_not(list_contains))(identifiers, name_to);
  await file_js_transform_ast(function_name, async node => {
    if (m_js_equals(node.type, "Identifier")) {
      if (m_js_equals(node.name, name_from)) {
        node.name = name_to;
      }
    }
  });
}
