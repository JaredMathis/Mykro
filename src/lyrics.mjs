
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { list_size } from "./list_size.mjs";
import { lyrics_database_get } from "./lyrics_database_get.mjs";
import { lyrics_paragraph } from "./lyrics_paragraph.mjs";
import { list_add_all } from "./list_add_all.mjs";
import { list_where } from "./list_where.mjs";
import { for_each } from "./for_each.mjs";
import { tautology } from "./tautology.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let database = await lyrics_database_get();

    let result = [];

    await for_each(_.range(0, 12), async item => {

        let subjects = ['god', 'me'];
        let subject = await list_item_random(subjects);
        let paragraph = await lyrics_paragraph(database, subject);
        await list_add_all(result, paragraph);
        
        // console.log(result)

        
        // Remove duplicate sentences
        // result = _.uniq(result);
        
        result = await list_where(result, tautology);
    }) ;

    return result;
}