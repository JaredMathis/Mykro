import { returns } from "./returns.mjs";

export function assert(_function) {
    return returns(_function, true);
}