import fs from 'fs';

export function file_new(file_path) {
    assert(string_is)(file_path);
    file_overwrite(file_path)
    fs.promises.writeFile()
}