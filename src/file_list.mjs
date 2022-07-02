const fs = require('fs');
const path = require('path');

export function *file_list(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* file_list(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}