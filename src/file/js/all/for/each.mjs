import {file_js_all_for_each_generic} from "./each/generic.mjs";
import {file_js_all_function_names} from "./../function/names.mjs";
export async function file_js_all_for_each() {
  let function_names = await file_js_all_function_names();
  await file_js_all_for_each_generic(function_names, arguments);
}
