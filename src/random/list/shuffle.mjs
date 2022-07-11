import {list_range} from "./../../list/range.mjs";
import {list_is} from "./../../list/is.mjs";
import {list_size} from "./../../list/size.mjs";
import {m_js_for_each} from "./../../m/js/for/each.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import { random_number } from "../number.mjs";
export async function random_list_shuffle(list) {
  await m_js_arguments_assert(list_is)(arguments);
  await m_js_for_each(await list_range(await list_size(list)), async index => {
    let index_new = await random_number(index, await list_max_index(list));
    await list_swap(list, index, index_new);
  });
}
