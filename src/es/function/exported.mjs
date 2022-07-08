import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {js_defined_is} from "./../../js/defined/is.mjs";
import {es_exports} from "./../exports.mjs";
import {list_single} from "./../../list/single.mjs";
export async function es_function_exported(parsed) {
  await js_arguments_assert(js_defined_is)(arguments);
  let exports = await es_exports(parsed);
  return await list_single(exports);
}
