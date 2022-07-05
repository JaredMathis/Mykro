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
    let config = await file_json_read("./mykcrodev_config.json");

    let result = await command_line(`node src/run_function.mjs ` + line);
    console.log(result.stdout);
  } catch (e) {
    await js_log_error(e);
  }
});
