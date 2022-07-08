import {js_not} from "./../../../js/not.mjs";
import {js_string_is} from "./../../../js/string/is.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {js_assert} from "./../../../js/assert.mjs";
import {list_contains} from "./../../../list/contains.mjs";
import {js_string_identifier_is} from "./../../../js/string/identifier/is.mjs";
import {js_equals} from "./../../../js/equals.mjs";
import {file_js_identifiers_get} from "./../identifiers/get.mjs";
import { file_js_transform_ast } from "../transform/ast.mjs";
export async function file_js_identifier_rename(function_name, name_from, name_to) {
  await js_arguments_assert(js_string_identifier_is, js_string_is, js_string_is)(arguments);
  let identifiers = await file_js_identifiers_get(function_name);
  await js_assert(js_not(list_contains))(identifiers, name_to);
  await file_js_transform_ast(function_name, async node => {
    if (js_equals(node.type, "Identifier")) {
      if (js_equals(node.name, name_from)) {
        node.name = name_to;
      }
    }
  });
}
