import {arguments_assert} from "./../../arguments/assert.mjs";
import {defined_is} from "./../../defined/is.mjs";
import {es_exports} from "./../exports.mjs";
import {list_single} from "./../../list_single.mjs";
export async function es_function_exported(parsed) {
  await arguments_assert(defined_is)(arguments);
  let exports = await es_exports(parsed);
  return await list_single(exports);
}
