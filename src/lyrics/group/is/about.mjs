import _ from "lodash";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {string_is} from "./../../../string/is.mjs";
export async function lyrics_group_is_about(object_clause) {
  await js_arguments_assert(string_is)(arguments);
  return g => {
    return _.isUndefined(g.parent) && g.nouns.includes(object_clause);
  };
}
