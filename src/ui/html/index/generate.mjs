import {file_js_all_match_exact} from "../../../file/js/all/match/exact.mjs";
import {file_overwrite} from "../../../file/overwrite.mjs";
import { m_js_string_identifier_is } from "../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function ui_html_index_generate(main_function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  let match = await file_js_all_match_exact(main_function_name);
  let result = `
<!DOCTYPE html>
<html>
    <body>
        <script src="${match.file_path}"></script>
    </body>
</html>
`;
  await file_overwrite("index.html", result);
}
