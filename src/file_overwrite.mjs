import fs from 'fs';
import { string_is } from './string_is.mjs';
import { arguments_assert } from './arguments_assert.mjs';

export function file_overwrite(file_path, text) {
    arguments_assert(string_is)(arguments);
    fs.promises.writeFile(file_path, text);
}