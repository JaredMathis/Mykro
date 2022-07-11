import {file_js_move_without_resolve} from "./../move/without/resolve.mjs";
import {file_js_imports_resolve} from "./../imports/resolve.mjs";
import {file_js_folderize} from "./../folderize.mjs";
import {m_js_for_each} from "./../../../m/js/for/each.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {file_js_working} from "./../working.mjs";
export async function file_js_working_folderize() {
  await m_js_arguments_assert()(arguments);
  let files = await file_js_working();
  await m_js_for_each(files, async file => {
    await file_js_move_without_resolve(file.name, file.name);
  });
  await m_js_for_each(files, async file => {
    await file_js_imports_resolve(file.name);
  });
}
