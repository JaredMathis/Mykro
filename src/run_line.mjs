import _ from 'lodash';
import {file_list} from './file_list.mjs'
import { path_file_name } from './path_file_name.mjs';
import path from 'path';

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
    if (match = _.find(mapped, { name: first })) {
        let import_path = path.resolve(match.file_path)
        let imported = await import("file://" + import_path);
        let _function = imported[match.name];
        let tokens_remaining = tokens.slice(1);
        let result = _function(...tokens_remaining)
        console.log(result);
    } else {
        console.log('No matching command.')
    }
}s