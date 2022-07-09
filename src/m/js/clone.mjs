import {json_to} from "./../../json/to.mjs";
import {m_js_defined_is} from "./defined/is.mjs";
import {m_js_arguments_assert} from "./arguments/assert.mjs";
import {json_from} from "./../../json/from.mjs";
export async function m_js_clone(object) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  return await json_from(await json_to(object));
}
