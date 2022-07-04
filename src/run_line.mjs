import _ from 'lodash';
import {file_list} from './file_list.mjs'
import { path_file_name } from './path_file_name.mjs';
import { git_acp } from './git_acp.mjs';
import path from 'path';
import colors from 'colors'

let directory = './src';

export async function run_line(line) {
    let tokens = line.split(' ');
    let first = tokens[0];
    let files = Array.from(file_list(directory));
    let mapped = files.map(f => {
        return {
            name: path_file_name(f),
            file_path: f,
        } 
    } );
    let match;
    if (match = run_line_search(mapped, first)) {
        let import_path = path.resolve(match.file_path)
        console.log(import_path.blue)
        let imported = await import("file://" + import_path);
        let _function = imported[match.name];
        let tokens_remaining = tokens.slice(1);
        try {
            let result = await _function(...tokens_remaining);
            console.log(result);
            let git_result = await git_acp(`${line}`);
            if (_.isUndefined(git_result)) {
                console.log(`${git_acp.name} ran successfully`.magenta);
            } else {
                console.log(`${git_acp.name} errored. Maybe there was nothing to commit?`.magenta);
                console.log(git_result.stack.red);
            }
        } catch (e) {
            console.log(e.stack.red);
        }
    } else {
        console.log('No matching command.'.red)
    }
}

function run_line_search(mapped, first) {
    return _.find(mapped, { name: first });
}
