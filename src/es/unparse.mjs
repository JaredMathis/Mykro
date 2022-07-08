import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {generate} from "astring";
import {js_defined_is} from "./../js/defined/is.mjs";
export async function es_unparse(ast) {
  await js_arguments_assert(js_defined_is)(arguments);
  let result = generate(ast);
  return result;
}
