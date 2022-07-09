import {file_path_join} from "./../../path/join.mjs";
import {js_for_each} from "./../../../js/for/each.mjs";
import {js_string_replace_all} from "./../../../js/string/replace/all.mjs";
import {mykro_config_src_path_get} from "./../../../mykro/config/src/path/get.mjs";
import {file_overwrite} from "./../../overwrite.mjs";
import {file_js_all} from "./../all.mjs";
import {file_js_extension} from "./../extension.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
export async function file_js_index_generate() {
  await js_arguments_assert()(arguments);
  let files = await file_js_all();
  let result = ``;
  await js_for_each(files, async file => {
    result += `
export {${file.name}} from "./${await js_string_replace_all(file.file_path, "\\", "/")}";`;
  });

  let output_file_path = "index" + await file_js_extension();
  await file_overwrite(output_file_path, result);
  return result;
}
