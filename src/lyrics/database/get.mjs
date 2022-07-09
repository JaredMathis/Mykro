import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_assert} from "./../../m/js/assert.mjs";
import {m_js_equals} from "./../../m/js/equals.mjs";
import {list_map} from "./../../list/map.mjs";
import {m_js_string_split} from "./../../m/js/string/split.mjs";
export async function lyrics_database_get() {
  await m_js_arguments_assert()(arguments);
  let god_attribute_adjectives = ["abundant", "amazing", "unending", "endless"];
  let sub_group1 = {
    adjectives: ["sweet", "pleasant"],
    nouns: ["sound"]
  };
  let group_god_attributes = {
    parent: "god",
    adjectives: god_attribute_adjectives,
    nouns: ["grace", "love"],
    sub_groups: [sub_group1]
  };
  let group_me = {
    nouns: ["me"],
    objects: ["wretch", "worm"]
  };
  let group_me_past = {
    times: ["past"],
    nouns: ["me"],
    adjectives: ["lost", "dead", "blind", "confused", "alone", "broken", "fatherless"]
  };
  let group_me_present = {
    times: ["present"],
    nouns: ["me"],
    adjectives: ["found", "blessed", "secure", "hopeful"],
    verbs: ["see", "hope"]
  };
  let proposition_sentences = ["grace saved me"];
  let propositions = await list_map(proposition_sentences, async s => {
    let split = await m_js_string_split(s, " ");
    await m_js_assert(m_js_equals)(split.length, 3);
    return {
      nouns: [split[0]],
      verbs: [split[1]],
      objects: [split[2]]
    };
  });
  let groups = [group_god_attributes, group_me, group_me_past, group_me_present];
  let database = {
    propositions,
    groups
  };
  return database;
}
