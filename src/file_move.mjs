import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function file_move(file_path_from, file_path_to) {
  await arguments_assert(string_is, string_is)(arguments);
}
