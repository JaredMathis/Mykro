
import { arguments_assert } from "./arguments_assert.mjs";

export async function lyrics_database_get() {
    await arguments_assert()(arguments);
    let god_attribute_adjectives = [
        "abundant",
        "amazing",
        "unending",
        "endless",
    ];

    let group2 = {
        adjectives: [
            "sweet",
            "pleasant"
        ],
        nouns: [
            "sound",
        ]
    };

    let group1 = {
        parent: 'god',
        adjectives: god_attribute_adjectives,
        nouns: [
            "grace",
            "love",
        ],
        sub_groups: [
            group2
        ]
    };

    let group_me = {
        noun: 'me',
        objects: [
            'wretch',
            'worm'
        ]
    };

    let propositions = [{
        noun: 'grace',
        verb: 'saved',
        object: 'me',
    }];

    let god_attributes_groups = [
        group1
    ];

    let database = {
        propositions,
        god_attributes_groups,
    };
    return database;
}