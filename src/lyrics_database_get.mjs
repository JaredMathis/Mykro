
import { arguments_assert } from "./arguments_assert.mjs";

export async function lyrics_database_get() {
    await arguments_assert()(arguments);
    let god_attribute_adjectives = [
        "abundant",
        "amazing",
        "unending",
        "endless",
    ];

    let sub_group1 = {
        adjectives: [
            "sweet",
            "pleasant"
        ],
        nouns: [
            "sound",
        ]
    };

    let group_god_attributes = {
        parent: 'god',
        adjectives: god_attribute_adjectives,
        nouns: [
            "grace",
            "love",
        ],
        sub_groups: [
            sub_group1
        ]
    };

    let group_me = {
        nouns: ['me'],
        objects: [
            'wretch',
            'worm'
        ]
    };

    let propositions = [{
        nouns: ['grace'],
        verbs: ['saved'],
        objects: ['me'],
    }];

    let groups = [
        group_god_attributes
    ];

    let database = {
        propositions,
        groups,
    };
    return database;
}