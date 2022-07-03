
import { arguments_assert } from "./arguments_assert.mjs";

export async function run_function() {
    await arguments_assert()(arguments);

    console.log(process.argv);
    // TODO
}