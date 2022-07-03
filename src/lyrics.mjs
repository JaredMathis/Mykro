
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_database_get } from "./lyrics_database_get.mjs";
import { lyrics_paragraph } from "./lyrics_paragraph.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let database = await lyrics_database_get();

    let subjects = ['god', 'me'];
    let subject = await list_item_random(subjects);
    return await lyrics_paragraph(database, subject);
}