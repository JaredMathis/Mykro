import {string_is} from './string_is.mjs';
import {number_is} from "./number_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function greet(name) {
  await arguments_assert(string_is)(arguments);
  return "hello " + name;
}
