import path from 'path'

export function path_file_name(file_path) {
    var filename = path.parse(file_path).base;
    return filename;
}