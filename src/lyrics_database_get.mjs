
import { arguments_assert } from "./arguments_assert.mjs";
import { assert } from "./assert.mjs";
import { equals } from "./equals.mjs";
import { list_map } from "./list_map.mjs";

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

    let proposition_sentences = [
        'grace saved me',
    ]

    let propositions = list_map(proposition_sentences, s => {
        let split = string_split(proposition_sentences, ' ');
        assert(equals)(split.length, 3);

        return [{
            nouns: [split[0]],
            verbs: [split[1]],
            objects: [split[2]],
        }]
    });

    let groups = [
        group_god_attributes,
        group_me,
    ];

    let database = {
        propositions,
        groups,
    };
    return database;
}