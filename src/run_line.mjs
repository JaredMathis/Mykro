
import {string_starts_with_ensure} from "./string_starts_with_ensure.mjs";
import {string_starts_with} from "./string_starts_with.mjs";
import _ from "lodash";
import {git_acp} from "./git_acp.mjs";
import "colors";
import {list_map} from "./list_map.mjs";
import {file_js_run} from "./file_js_run.mjs";
import {file_js_all_for_each} from "./file_js_all_for_each.mjs";
import {file_js_imports_missing_add} from "./file_js_imports_missing_add.mjs";
import {git_branch_show_current} from "./git_branch_show_current.mjs";
import {mykro_config_get} from "./mykro_config_get.mjs";
import {command_line} from "./command_line.mjs";
import {mykro_config_auto_disabled_get} from "./mykro_config_auto_disabled_get.mjs";
import {mykro_config_path} from "./mykro_config_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { string_is } from "./string_is.mjs";
import { json_to } from "./json_to.mjs";
import { defined_is } from "./defined_is.mjs";
export async function run_line(line) {
  let tokens = line.split(" ");
  let token_first = tokens[0];
  let tokens_remaining = tokens.slice(1);
  let config = await mykro_config_get();
  let auto = async () => {
    if (await mykro_config_auto_disabled_get()) {
      console.log(`${auto.name} is disabled in ${await mykro_config_path()}. Not running ${auto.name}`.cyan);
      return;
    }
    await file_js_all_for_each(file_js_imports_missing_add.name);
    console.log(`${auto.name} ran successfully`.cyan);
  }
  let on_no_matches = async () => console.log(`No matching command: ${token_first}`.red);
  let on_success = async (result, match) => {
    console.log(result);
    if (await defined_is(result)) {
      await file_overwrite('./gitignore/out.txt', string_is(result) ? result : await json_to(result));
    }
    await auto();
    if (config?.on_success) {
      await command_line(config.on_success);
    }
    let git_prefix = "git_";
    if (await string_starts_with(match.name, git_prefix)) {
      console.log(`${match.name} starts with ${git_prefix}. Not running ${git_acp.name}`.magenta);
    } else {
      let branch_name = await git_branch_show_current();
      let message = `${line}`;
      let prefix_expected = `${match.name} `;
      message = await string_starts_with_ensure(message, prefix_expected);
      message = `${branch_name} ${message}`;
      return;
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
  let on_match = async (import_path, match) => {
    let on_token_first = (config?.on || {})[match.name];
    if (on_token_first) {
      console.log(`Running ${on_token_first}`.green);
      await command_line(on_token_first);
    }
    console.log(import_path.blue + " " + tokens_remaining.map(a => a.toString()).join(" "));
    await auto();
  };
  await file_js_run(token_first, tokens_remaining, on_no_matches, on_success, on_error, on_multiple_matches, on_match);
}
