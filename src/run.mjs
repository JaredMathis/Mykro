import {mykro_config_src_path_get} from "./mykro/config/src/path/get.mjs";
import readline from "readline";
import {command_line} from "./command/line.mjs";
import {m_js_log_error} from "./m/js/log/error.mjs";
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});
rl.on("line", async line => {
  try {
    let src_path = await mykro_config_src_path_get();
    let result = await command_line(`node ${src_path}/run/function.mjs ` + line);
    console.log(result.stdout);
  } catch (e) {
    await m_js_log_error(e);
  }
});
