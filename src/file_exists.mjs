import fs from "fs";
export function file_exists(file) {
  return fs.promises.access(file, fs.constants.F_OK).then(() => true).catch(() => false);
}
