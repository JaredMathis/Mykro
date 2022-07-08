import {string_starts_with} from './string_starts_with.mjs';
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { assert } from "./assert.mjs";
export async function string_prefix_remove(input, prefix) {
  await arguments_assert(string_is, string_is)(arguments);
  await assert(string_starts_with)(input, prefix);
}
