import {mykrodev_config_src_path_get} from './mykrodev_config_src_path_get.mjs';
import {mykrodev_config_get} from './mykrodev_config_get.mjs';
import {constant_mykrodev} from './constant_mykrodev.mjs';
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
    let src_path = await mykrodev_config_src_path_get();
    let result = await command_line(`node ${src_path}/run_function.mjs ` + line);
    console.log(result.stdout);
  } catch (e) {
    await js_log_error(e);
  }
});
async function mykrodev_config_src_path_get() {
  let config = await mykrodev_config_get();
  let src_path = config.path.src[await constant_mykrodev()];
  return src_path;
}

