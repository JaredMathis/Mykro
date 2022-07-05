import {git_pull} from './git_pull.mjs';
import {git_checkout} from './git_checkout.mjs';

import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";

export async function git_checkout_pull(branch_name) {
    await arguments_assert(string_is)(arguments);
    await git_checkout(branch_name)
    await git_pull(branch_name)
}