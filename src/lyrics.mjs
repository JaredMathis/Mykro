
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_database_get } from "./lyrics_database_get.mjs";
import { lyrics_sentence } from "./lyrics_sentence.mjs";
import { list_where } from "./list_where.mjs";
import { lyrics_group_is_about } from "./lyrics_group_is_about.mjs";
import { random_number } from "./random_number.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let database = await lyrics_database_get();

    let subject = 'god';
    subject = 'me'
    return await lyrics_paragraph(database, subject);
}