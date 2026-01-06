const weaknessData = {
    bug: {
        'resistant': [
            'grass', 'fighting', 'ground'
        ],
        'weak': [
            'fire', 'flying', 'rock'
        ],
    },
    dark: {
        'immune': [
            'psychic'
        ],
        'resistant': [
            'ghost', 'dark'
        ],
        'weak': [
            'bug', 'fairy', 'fighting'
        ]
    },
    dragon: {
        'resistant': [
            'fire', 'water', 'electric', 'grass'
        ],
        'weak': [
            'dragon', 'fairy', 'ice'
        ]
    },
    electric: {
        'resistant': [
            'electric', 'flying', 'steel'
        ],
        'weak': [
            'ground'
        ]
    },
    fairy: {
        'immune': [
            'dragon'
        ],
        'resistant': [
            'fighting', 'bug', 'dark'
        ],
        'weak': [
            'poison', 'steel'
        ]
    },
    fighting: {
        'resistant': [
            'bug', 'rock', 'dark'
        ],
        'weak': [
            'fairy', 'flying', 'psychic'
        ]
    },
    fire: {
        'resistant': [
            'fire', 'bug', 'grass', 'ice', 'steel', 'fairy'
        ],
        'weak': [
            'ground', 'rock', 'water'
        ]
    },
    flying: {
        'immune': [
            'ground'
        ],
        'resistant': [
            'bug', 'fighting', 'grass'
        ],
        'weak': [
            'electric', 'ice', 'rock'
        ]
    },
    ghost: {
        'immune': [
            'fighting', 'normal'
        ],
        'resistant': [
            'poison', 'bug'
        ],
        'weak': [
            'dark', 'ghost'
        ]
    },
    grass: {
        'resistant': [
            'ground', 'electric', 'water', 'grass'
        ],
        'weak': [
            'bug', 'fire', 'flying', 'ice', 'poison'
        ]
    },
    ground: {
        'immune': [
            'electric'
        ],
        'resistant': [
            'poison', 'rock'
        ],
        'weak': [
            'grass', 'ice', 'water'
        ]
    },
    ice: {
        'resistant': [
            'ice'
        ],
        'weak': [
            'fighting', 'fire', 'rock', 'steel'
        ]
    },
    normal: {
        'immune': [
            'ghost'
        ],
        'weak': [
            'fighting'
        ]
    },
    poison: {
        'resistant': [
            'fairy', 'grass', 'fighting', 'poison', 'bug'
        ],
        'weak': [
            'ground', 'psychic'
        ]
    },
    psychic: {
        'resistant': [
            'fighting', 'psychic'
        ],
        'weak': [
            'bug', 'dark', 'ghost'
        ]
    },
    rock: {
        'resistant': [
            'normal', 'fire', 'poison', 'flying'
        ],
        'weak': [
            'fighting', 'grass', 'ground', 'steel', 'water'
        ]
    },
    steel: {
        'immune': [
            'poison'
        ],
        'resistant': [
            'normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'
        ],
        'weak': [
            'fighting', 'fire', 'ground'
        ]
    },
    water: {
        'resistant': [
            'fire', 'water', 'ice', 'steel'
        ],
        'weak': [
            'electric', 'grass'
        ]
    }
};

export default weaknessData;