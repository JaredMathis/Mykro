
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { string_is } from "./string_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_sentence } from "./lyrics_sentence.mjs";
import { list_where } from "./list_where.mjs";
import { lyrics_group_is_about } from "./lyrics_group_is_about.mjs";
import { random_number } from "./random_number.mjs";

export async function lyrics_paragraph(database, subject) {
    await arguments_assert(defined_is, string_is)(arguments);

    console.log('here')

    let groups_about_subject = await list_where(
        database.groups,
        async (g) => g.parent === subject || (await lyrics_group_is_about(subject))(g));

    let group = await list_item_random(groups_about_subject);

    let sentences_count = await random_number(1, 3);

    let result = await list_map(_.range(0, sentences_count), async (i) => {
        let item = await lyrics_sentence(group, database);
        return item;
    });
    return result;
}
