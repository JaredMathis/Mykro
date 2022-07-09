import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../m/js/string/is.mjs";
import {parseScript} from "meriyah";
export async function es_parse(unparsed) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  return parseScript(unparsed, {
    module: true
  });
}
