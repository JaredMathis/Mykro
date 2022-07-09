import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {file_js_all_match_exact} from "./../all/match/exact.mjs";
import {file_prepend} from "./../../prepend.mjs";
import {msft_vs_code_open} from "./../../../msft/vs/code/open.mjs";
import {m_js_string_is} from "./../../../m/js/string/is.mjs";
export async function file_js_import_add(function_name, import_name) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  let {file_path} = await file_js_all_match_exact(function_name);
  await file_prepend(file_path, `import {${import_name}} from './${import_name}.mjs';
`);
  await msft_vs_code_open(file_path);
}
