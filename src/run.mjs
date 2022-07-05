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
    let config = await file_json_read("./mykrodev_config.json");
    let src_path = config.path.src.mykrodev;

    let result = await command_line(`node ${src_path}/run_function.mjs ` + line);
    console.log(result.stdout);
  } catch (e) {
    await js_log_error(e);
  }
});
