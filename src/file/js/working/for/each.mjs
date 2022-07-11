import {file_js_all_for_each_generic} from "./../../all/for/each/generic.mjs";
import { file_js_working } from "../../working.mjs";
export async function file_js_working_for_each() {
  let function_names = await file_js_working();
  await file_js_all_for_each_generic(function_names, arguments);
}

