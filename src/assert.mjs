import {returns} from "./returns.mjs";
export function assert(_function, data) {
  return returns(_function, true, data);
}
