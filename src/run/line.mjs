import {m_js_string_starts_with_ensure} from "./../m/js/string/starts/with/ensure.mjs";
import {m_js_string_starts_with} from "./../m/js/string/starts/with.mjs";
import {git_acp} from "./../git/acp.mjs";
import "colors";
import {list_map} from "./../list/map.mjs";
import {file_js_run} from "./../file/js/run.mjs";
import {file_js_all_for_each} from "./../file/js/all/for/each.mjs";
import {git_branch_show_current} from "./../git/branch/show/current.mjs";
import {mykro_config_get} from "./../mykro/config/get.mjs";
import {command_line} from "./../command/line.mjs";
import {mykro_config_auto_disabled_get} from "./../mykro/config/auto/disabled/get.mjs";
import {mykro_config_path} from "./../mykro/config/path.mjs";
import {file_overwrite} from "./../file/overwrite.mjs";
import {m_js_string_is} from "./../m/js/string/is.mjs";
import {json_to} from "./../json/to.mjs";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
import {file_js_auto} from "./../file/js/auto.mjs";
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
    await file_js_all_for_each(file_js_auto.name);
    console.log(`${auto.name} ran successfully`.cyan);
  };
  let on_no_matches = async () => console.log(`No matching command: ${token_first}`.red);
  let on_success = async (result, match) => {
    console.log(result);
    if (await m_js_defined_is(result)) {
      await file_overwrite("./gitignore/out.txt", m_js_string_is(result) ? result : await json_to(result));
    }
    await auto();
    if (config?.on_success) {
      await command_line(config.on_success);
    }
    let git_prefix = "git_";
    if (await m_js_string_starts_with(match.name, git_prefix)) {
      console.log(`${match.name} starts with ${git_prefix}. Not running ${git_acp.name}`.magenta);
    } else {
      let branch_name = await git_branch_show_current();
      let message = `${line}`;
      let prefix_expected = `${match.name} `;
      message = await m_js_string_starts_with_ensure(message, prefix_expected);
      message = `${branch_name} ${message}`;
      let git_result = await git_acp(message);
      if (!await m_js_defined_is(git_result)) {
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
    let on_token_first = (config?.on || ({}))[match.name];
    if (on_token_first) {
      console.log(`Running ${on_token_first}`.green);
      await command_line(on_token_first);
    }
    console.log(import_path.blue + " " + tokens_remaining.map(a => a.toString()).join(" "));
    await auto();
  };
  await file_js_run(token_first, tokens_remaining, on_no_matches, on_success, on_error, on_multiple_matches, on_match);
}
