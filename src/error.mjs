import _ from "lodash";
export function error(message) {
  if (!_.isString(message)) {
    message = JSON.stringify(message);
  }
  throw new Error(message);
}
