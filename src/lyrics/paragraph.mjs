import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_defined_is} from "./../js/defined/is.mjs";
import {js_string_is} from "./../js/string/is.mjs";
import {list_map} from "./../list/map.mjs";
import {list_item_random} from "./../list/item/random.mjs";
import {lyrics_sentence} from "./sentence.mjs";
import {list_where} from "./../list/where.mjs";
import {lyrics_group_is_about} from "./group/is/about.mjs";
import {random_number} from "./../random/number.mjs";
import _ from "lodash";
export async function lyrics_paragraph(database, subject) {
  await js_arguments_assert(js_defined_is, js_string_is)(arguments);
  let groups_about_subject = await list_where(database.groups, async g => g.parent === subject || (await lyrics_group_is_about(subject))(g));
  let group = await list_item_random(groups_about_subject);
  let sentences_count = await random_number(1, 3);
  let result = await list_map(_.range(0, sentences_count), async i => {
    let item = await lyrics_sentence(group, database);
    return item;
  });
  return result;
}
