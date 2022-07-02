import fs from 'fs';
import { arguments_assert } from './arguments_assert.mjs';
import { string_is } from './string_is.mjs';

export async function file_prepend(file_path, text_prepend) {
    await arguments_assert(string_is, string_is)(arguments);
    file_read(file_path)
    // fs.promises.readFile()
    // TODO
}