import {file_overwrite} from './file_overwrite.mjs';
import {file_exists} from './file_exists.mjs';
import readline from "readline";
import {command_line} from "./command_line.mjs";
import { file_json_read } from "./file_json_read.mjs";
import {js_log_error} from "./js_log_error.mjs";
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});
rl.on("line", async line => {
  try {
    let config = await mykrodev_config_get();
    let src_path = config.path.src.mykrodev;

    let result = await command_line(`node ${src_path}/run_function.mjs ` + line);
    console.log(result.stdout);
  } catch (e) {
    await js_log_error(e);
  }
});
async function mykrodev_config_get() {
  const config_path = `./mykrodev_config.json`;
  if (!await file_exists(config_path)) {
    await file_overwrite(config_path, `
{
    "path": {
        "src": {
            "mykrodev": "./node_modules/mykrodev/src"
        }
    }
}
      `);
  }
  let config = await file_json_read(config_path);
  return config;
}

