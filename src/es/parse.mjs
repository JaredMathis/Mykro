import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_string_is} from "./../js/string/is.mjs";
import {parseScript} from "meriyah";
export async function es_parse(unparsed) {
  await js_arguments_assert(js_string_is)(arguments);
  return parseScript(unparsed, {
    module: true
  });
}
