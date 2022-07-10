import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {random_probability_is} from "./../probability/is.mjs";
export async function random_with_probability(probability) {
  await m_js_arguments_assert(random_probability_is)(arguments);
  return Math.random() <= probability;
}
