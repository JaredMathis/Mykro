
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_database_get } from "./lyrics_database_get.mjs";
import { lyrics_sentence } from "./lyrics_sentence.mjs";
import { list_where } from "./list_where.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let database = await lyrics_database_get();

    let subject = 'god';
    let groups_about_god = await list_where(database.groups, g => g.parent === subject );
    let group = await list_item_random(groups_about_god);

    let sentences_count = 12;

    let result = await list_map(_.range(0, sentences_count), async i => {
        let item = await lyrics_sentence(group, database);
        return item;
    });
    
    return result
}