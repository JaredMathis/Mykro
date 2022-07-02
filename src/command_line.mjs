import  util from 'util';
import child_process from 'child_process';
let exec = util.promisify(child_process.exec)

export async function command_line(command) {
    return await exec(command);
}