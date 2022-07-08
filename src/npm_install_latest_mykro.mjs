import {npm_install_latest} from './npm_install_latest.mjs';

import { arguments_assert } from "./arguments_assert.mjs";

export async function npm_install_latest_mykro() {
    await arguments_assert()(arguments);
    await npm_install_latest(`mykro`)
}