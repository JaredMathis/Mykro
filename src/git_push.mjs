import {command_line} from "./command_line.mjs";
export async function git_push() {
  return await command_line(`git push`);
}
