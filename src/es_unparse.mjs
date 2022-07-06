import {arguments_assert} from "./arguments_assert.mjs";
import {generate} from "astring";
import {defined_is} from "./defined_is.mjs";
export async function es_unparse(___ast) {
  await arguments_assert(defined_is)(arguments);
  let result = generate(___ast);
  return result;
}
