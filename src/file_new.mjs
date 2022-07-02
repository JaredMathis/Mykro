import { arguments_assert } from './arguments_assert.mjs';
import { string_is } from './string_is.mjs';
import { file_overwrite } from './file_overwrite.mjs';

export function file_new(file_path) {
    arguments_assert(string_is)(arguments);
    file_overwrite(file_path, '')
}