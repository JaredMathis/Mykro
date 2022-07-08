import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {list_item_random} from "./../list/item/random.mjs";
import {lyrics_that_clause} from "./that/clause.mjs";
import {random_with_probability} from "./../random/with/probability.mjs";
import {tautology} from "./../tautology.mjs";
import {equals_json} from "./../equals/json.mjs";
export async function lyrics_sentence(_arguments) {
  await js_arguments_assert(tautology)(arguments);
  let {database} = _arguments;
  let {group} = _arguments;
  let noun = await list_item_random(group.nouns);
  if (noun === "me") {
    noun = "i";
  }
  let adjective = ``;
  if (group.adjective) {
    if (await random_with_probability(0.5)) {
      adjective = await list_item_random(group.adjectives);
      adjective += " ";
    }
  }
  let noun_clause = `${adjective}${noun}`;
  noun_clause += await lyrics_that_clause(database, noun);
  let result = noun_clause;
  if (group["sub_groups"]) {
    let {sub_groups} = group;
    let sub_group = await list_item_random(sub_groups);
    let sub_adjective = await list_item_random(sub_group.adjectives);
    let sub_noun = await list_item_random(sub_group.nouns);
    if (await random_with_probability(0.5)) {
      let of_clause = ` of ${noun_clause}`;
      if (await random_with_probability(0.5)) {
        of_clause = ``;
      }
      result = `how ${sub_adjective} the ${sub_noun}${of_clause}`;
    }
  } else {
    let is_past = false;
    let has_verb = false;
    let verb;
    if (noun === "i") {
      if (group.times && await equals_json(group.times, ["past"])) {
        verb = "was";
        is_past = true;
      } else {
        verb = "am";
      }
    } else {
      verb = "is";
    }
    if (group.adjectives) {
      if (await random_with_probability(0.5)) {
        let adjective = await list_item_random(group.adjectives);
        result = `${result} ${verb} ${adjective}`;
        has_verb = true;
      }
    }
    if (group.objects) {
      if (await random_with_probability(0.5)) {
        let object = await list_item_random(group.objects);
        result = `${result} ${verb} a ${object}`;
        has_verb = true;
      }
    }
    if (is_past && has_verb) {}
  }
  return result;
}
