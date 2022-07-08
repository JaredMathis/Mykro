import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {generate} from "astring";
import {defined_is} from "./../defined/is.mjs";
export async function es_unparse(ast) {
  await js_arguments_assert(defined_is)(arguments);
  let result = generate(ast);
  return result;
}
