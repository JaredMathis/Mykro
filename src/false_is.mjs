import {arguments_assert} from './arguments_assert.mjs';
import {defined_is} from './defined_is.mjs';
import {equals} from './equals.mjs';
import {equals} from './equals.mjs';
import {defined_is} from './defined_is.mjs';
import {arguments_assert} from './arguments_assert.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import {defined_is} from "./defined_is.mjs";
import {equals} from "./equals.mjs";
export async function false_is(value) {
  await arguments_assert(defined_is)(arguments);
  return equals(value, false);
}
