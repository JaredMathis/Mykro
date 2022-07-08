import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {probability_is} from "./../../probability/is.mjs";
export async function random_with_probability(probability) {
  await js_arguments_assert(probability_is)(arguments);
  return Math.random() <= probability;
}
