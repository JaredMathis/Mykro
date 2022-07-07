import {string_join} from './string_join.mjs';
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { string_split } from "./string_split.mjs";
export async function string_replace_all(input, search, replacement) {
  await arguments_assert(string_is, string_is, string_is)(arguments);
  let split = await string_split(input, search);
  return await string_join(split, replacement);
}
