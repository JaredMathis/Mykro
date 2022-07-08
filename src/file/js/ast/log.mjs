import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
export async function file_js_ast_log() {
  await js_arguments_assert()(arguments);
  await file_js_transform_ast();
}
