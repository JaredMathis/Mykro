import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {string_is} from "./../string/is.mjs";
import {parseScript} from "meriyah";
export async function es_parse(unparsed) {
  await js_arguments_assert(string_is)(arguments);
  return parseScript(unparsed, {
    module: true
  });
}
