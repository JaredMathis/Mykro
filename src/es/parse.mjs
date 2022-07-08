import {arguments_assert} from "./../arguments/assert.mjs";
import {string_is} from "./../string/is.mjs";
import {parseScript} from "meriyah";
export async function es_parse(unparsed) {
  await arguments_assert(string_is)(arguments);
  return parseScript(unparsed, {
    module: true
  });
}
