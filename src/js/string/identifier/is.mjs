import {constant_numbers} from "./../../../constant/numbers.mjs";
import {js_arguments_assert} from "./../../arguments/assert.mjs";
import {constant_alphabet} from "./../../../constant/alphabet.mjs";
import {js_defined_is} from "./../../defined/is.mjs";
import {js_for_each} from "./../../for/each.mjs";
import {list_index_of} from "./../../../list/index/of.mjs";
import {js_string_to_list} from "./../to/list.mjs";
export async function js_string_identifier_is(value) {
  await js_arguments_assert(js_defined_is)(arguments);
  let identifer_characters = await constant_alphabet() + `_` + constant_numbers();
  let identifer_characters_as_list = await js_string_to_list(identifer_characters);
  let value_as_list = await js_string_to_list(value);
  let result = true;
  await js_for_each(value_as_list, async v => {
    let index = await list_index_of(identifer_characters_as_list, v);
    if (!index.success) {
      result = false;
      console.log({v, identifer_characters_as_list})
      return true;
    }
  });
  return result;
}
