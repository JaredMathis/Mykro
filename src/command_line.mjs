import util from "util";
import child_process from "child_process";
export async function command_line() {
  let exec = util.promisify(child_process.exec);
  let _arguments = Array.from(arguments);
  let command = _arguments.join(" ");
  return await exec(command);
}
