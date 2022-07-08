import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {defined_is} from "./../../defined/is.mjs";
import {es_exports} from "./../exports.mjs";
import {list_single} from "./../../list/single.mjs";
export async function es_function_exported(parsed) {
  await js_arguments_assert(defined_is)(arguments);
  let exports = await es_exports(parsed);
  return await list_single(exports);
}
