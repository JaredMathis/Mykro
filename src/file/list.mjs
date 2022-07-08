import fs from "fs";
import path from "path";
export async function file_list(directory_name, results = []) {
  let files = await fs.promises.readdir(directory_name, {
    withFileTypes: true
  });
  for (let f of files) {
    let full_path = path.join(directory_name, f.name);
    if (f.isDirectory()) {
      await file_list(full_path, results);
    } else {
      results.push(full_path);
    }
  }
  return results;
}
