import {m_js_string_is} from "./string/is.mjs";
export function m_js_error(message) {
  if (m_js_string_is(message)) {
    message = JSON.stringify(message);
  }
  throw new Error(message);
}
