import {m_js_string_to_list} from "./../../m/js/string/to/list.mjs";
import {constant_alphabet} from "./../alphabet.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function constant_alphabet_sorted() {
  await m_js_arguments_assert()(arguments);
  let letters = await constant_alphabet();
  let letters_as_list = await m_js_string_to_list(letters);
  letters_as_list.sort();
  return letters_as_list;
}
