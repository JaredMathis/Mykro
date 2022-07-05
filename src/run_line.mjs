import {string_starts_with_ensure} from './string_starts_with_ensure.mjs';
import {string_starts_with} from './string_starts_with.mjs';
import _ from "lodash";
import {git_acp} from "./git_acp.mjs";
import path from "path";
import colors from "colors";
import {list_where} from "./list_where.mjs";
import {string_search_matches} from "./string_search_matches.mjs";
import {list_size} from "./list_size.mjs";
import {equals} from "./equals.mjs";
import {list_map} from "./list_map.mjs";
import {file_js_all} from "./file_js_all.mjs";
import {file_js_run} from "./file_js_run.mjs";
import {file_js_all_for_each} from "./file_js_all_for_each.mjs";
import {file_js_imports_missing_add} from "./file_js_imports_missing_add.mjs";
export async function run_line(line) {
  let tokens = line.split(" ");
  let token_first = tokens[0];
  let tokens_remaining = tokens.slice(1);
  let auto = async () => await file_js_all_for_each(file_js_imports_missing_add.name);
  let on_no_matches = async () => console.log(`No matching command: ${token_first}`.red);
  let on_success = async (result, match) => {
    console.log(result);
    await auto()
    let git_prefix = 'git_'
    if (await string_starts_with(match.name, git_prefix)) {
      console.log(`${match.name} starts with ${git_prefix}. Not running ${git_acp.name}`.magenta);
    } else {
      let message = `${line}`;
      let prefix_expected = `${match.name} `;
      message = await string_starts_with_ensure(message, prefix_expected);
      let git_result = await git_acp(message);
      if (_.isUndefined(git_result)) {
        console.log(`${git_acp.name} ran successfully`.magenta);
      } else {
        console.log(`${git_acp.name} errored. Maybe there was nothing to commit?`.magenta);
        console.log(git_result.stack.red);
      }
    }
  };
  let on_error = async e => console.log(e.stack.red);
  let on_multiple_matches = async matches => {
    console.log(`Multiple commands matched: `);
    console.log(await list_map(matches, m => m.name));
  };
  let on_match = async import_path => {
    console.log(import_path.blue + " " + tokens_remaining.map(a => a.toString()).join(" "));
    await auto()
  };
  await file_js_run(token_first, tokens_remaining, on_no_matches, on_success, on_error, on_multiple_matches, on_match);
}
