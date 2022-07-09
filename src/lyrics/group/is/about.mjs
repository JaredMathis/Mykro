import _ from "lodash";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../../../m/js/string/is.mjs";
export async function lyrics_group_is_about(object_clause) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  return g => {
    return _.isUndefined(g.parent) && g.nouns.includes(object_clause);
  };
}
