import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_all_match_exact } from "./file_js_all_match_exact.mjs";
import {file_prepend} from "./file_prepend.mjs";
import {msft_vs_code_open} from "./msft_vs_code_open.mjs";
import {string_is} from "./string_is.mjs";
export async function file_js_import_add(function_name, import_name) {
  await arguments_assert(string_is, string_is)(arguments);
  let {file_path} = await file_js_all_match_exact(function_name);
  await file_prepend(file_path, `import {${import_name}} from './${import_name}.mjs';
`);
  await msft_vs_code_open(file_path);
}
