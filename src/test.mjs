import {assert} from './assert.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import {defined_is} from "./defined_is.mjs";
export async function test(b) {
  await arguments_assert(defined_is)(arguments);
  assert()
}
