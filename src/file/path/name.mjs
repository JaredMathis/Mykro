import path from "path";
export function file_path_name(file_path) {
  var filename = path.parse(file_path).name;
  return filename;
}
