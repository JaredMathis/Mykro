import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {generate} from "astring";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
export async function es_unparse(ast) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  let result = generate(ast);
  return result;
}
