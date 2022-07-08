import {js_assert} from "./../assert.mjs";
import {js_equals} from "./../equals.mjs";
export function js_arguments_assert() {
  let asserters = Array.from(arguments);
  return async function wrapped() {
    let _arguments = Array.from(arguments[0]);
    await js_assert(js_equals)(asserters.length, _arguments.length);
    await Promise.all(asserters.map(async (asserter, argument_index) => {
      let value = _arguments[argument_index];
      await js_assert(asserter, {
        argument_index,
        asserter,
        value
      })(value);
    }));
  };
}
