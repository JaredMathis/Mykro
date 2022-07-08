import {arguments_assert} from "./../arguments/assert.mjs";
import {git_add} from "./add.mjs";
import {git_commit} from "./commit.mjs";
import {git_push} from "./push.mjs";
import {string_is} from "./../string/is.mjs";
export async function git_acp(message) {
  await arguments_assert(string_is)(arguments);
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
