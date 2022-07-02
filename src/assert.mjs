import { returns } from "./returns.mjs";

export async function assert(_function, data) {
    return await returns(_function, true, data);
}