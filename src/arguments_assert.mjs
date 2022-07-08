import {assert} from "./assert.mjs";
import {equals} from "./equals.mjs";
export function arguments_assert() {
  let asserters = Array.from(arguments);
  return async function wrapped() {
    let _arguments = Array.from(arguments[0]);
    await assert(equals)(asserters.length, _arguments.length);
    await Promise.all(asserters.map(async (asserter, argument_index) => {
      let value = _arguments[argument_index];
      await assert(asserter, {
        argument_index,
        asserter,
        value
      })(value);
    }));
  };
}
