import {not} from "./../../not.mjs";
import {assert} from "./../../assert.mjs";
import {file_exists} from "./../exists.mjs";
import {file_overwrite} from "./../overwrite.mjs";
import {file_js_name_to_path} from "./name/to/path.mjs";
import {msft_vs_code_open} from "./../../msft/vs/code/open.mjs";
export async function file_js_new(function_name) {
  let file_path = await file_js_name_to_path(function_name);
  await assert(not(file_exists))(file_path);
  await file_overwrite(file_path, `
import { arguments_assert } from "./arguments_assert.mjs";

export async function ${function_name}() {
    await arguments_assert()(arguments);
    // TODO
}`);
  await msft_vs_code_open(file_path);
}
