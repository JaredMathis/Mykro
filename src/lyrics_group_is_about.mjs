import _ from "lodash";
import {arguments_assert} from "./arguments_assert.mjs";
import {string_is} from "./string_is.mjs";
export async function lyrics_group_is_about(object_clause) {
  await arguments_assert(string_is)(arguments);
  return g => {
    return _.isUndefined(g.parent) && g.nouns.includes(object_clause);
  };
}
