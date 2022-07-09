import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../../m/js/defined/is.mjs";
import {es_exports} from "./../exports.mjs";
import {list_single} from "./../../list/single.mjs";
export async function es_function_exported(parsed) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  let exports = await es_exports(parsed);
  return await list_single(exports);
}
