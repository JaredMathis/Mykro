import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {git_add} from "./add.mjs";
import {git_commit} from "./commit.mjs";
import {git_push} from "./push.mjs";
import {js_string_is} from "./../js/string/is.mjs";
export async function git_acp(message) {
  await js_arguments_assert(js_string_is)(arguments);
  for (let command of [git_add, async () => {
    return await git_commit(message);
  }, git_push]) {
    try {
      await command();
    } catch (e) {
      return e;
    }
  }
}
