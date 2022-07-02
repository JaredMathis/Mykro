import fs from 'fs';

// From: https://stackoverflow.com/questions/17699599/node-js-check-if-file-exists
export function file_exists(file) {
    return fs.promises.access(file, fs.constants.F_OK)
             .then(() => true)
             .catch(() => false)
}