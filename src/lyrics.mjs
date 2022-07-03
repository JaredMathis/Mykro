
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyrics_database_get } from "./lyrics_database_get.mjs";
import { lyrics_paragraph } from "./lyrics_paragraph.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    console.log('here2')
    let database = await lyrics_database_get();

    let subject = 'god';
    subject = 'me'
    return await lyrics_paragraph(database, subject);
}