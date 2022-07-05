import util from "util";
import child_process from "child_process";
let exec = util.promisify(child_process.exec);
export async function command_line() {
  let _arguments = Array.from(arguments);
  let command = _arguments.join(' ');
  return await exec(command);
}
