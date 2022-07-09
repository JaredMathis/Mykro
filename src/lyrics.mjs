import _ from "lodash";
import {m_js_arguments_assert} from "./m/js/arguments/assert.mjs";
import {list_item_random} from "./list/item/random.mjs";
import {list_size} from "./list/size.mjs";
import {lyrics_database_get} from "./lyrics/database/get.mjs";
import {lyrics_paragraph} from "./lyrics/paragraph.mjs";
import {list_add_all} from "./list/add/all.mjs";
import {list_where} from "./list/where.mjs";
import {m_js_for_each} from "./m/js/for/each.mjs";
export async function lyrics() {
  await m_js_arguments_assert()(arguments);
  let database = await lyrics_database_get();
  let result = [];
  await m_js_for_each(_.range(0, 12), async item => {
    let subjects = ["god", "me"];
    let subject = await list_item_random(subjects);
    let paragraph = await lyrics_paragraph(database, subject);
    await list_add_all(result, paragraph);
    result = await list_where(result, i => i !== "i");
  });
  return result;
}
