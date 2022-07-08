import {arguments_assert} from "./../../arguments/assert.mjs";
import {constant_alphabet} from "./../../constant/alphabet.mjs";
import {defined_is} from "./../../defined/is.mjs";
import {for_each} from "./../../for/each.mjs";
import {list_index_of} from "./../../list/index/of.mjs";
import {string_to_list} from "./../to/list.mjs";
export async function string_identifier_is(value) {
  await arguments_assert(defined_is)(arguments);
  let identifer_characters = await constant_alphabet() + `_`;
  let identifer_characters_as_list = await string_to_list(identifer_characters);
  let value_as_list = await string_to_list(value);
  let result = true;
  await for_each(value_as_list, async v => {
    let index = await list_index_of(identifer_characters_as_list, v);
    if (!index.success) {
      result = false;
      return true;
    }
  });
  return result;
}
