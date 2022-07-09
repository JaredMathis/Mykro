import _ from "lodash";
export function m_js_error(message) {
  if (!_.isString(message)) {
    message = JSON.stringify(message);
  }
  throw new Error(message);
}