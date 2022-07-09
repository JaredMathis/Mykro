import _ from "lodash";
export default function m_js_function_data_get(_function) {
  let result = _.pick(_function, ["data", "name"]);
  return result;
}
