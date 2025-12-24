import { Question, Subject, InteractionType } from '../types';

export const GRADE_5_QUESTIONS: Question[] = [
    // --- MATH (14 Questions) ---
    { 
        id: 5001, subject: Subject.MATH, skillTag: "Number System", 
        questionText: "Form the number: 5 Lakh, 20 Thousand, and 3.", 
        interactionType: InteractionType.DRAG_TO_SLOTS, 
        categories: [{id: 'L', label: "Lakh"}, {id: 'TTh', label: "TTh"}, {id: 'Th', label: "Th"}, {id: 'H', label: "H"}, {id: 'T', label: "T"}, {id: 'O', label: "O"}],
        options: [{id: '5', text: "5"}, {id: '2', text: "2"}, {id: '0a', text: "0"}, {id: '0b', text: "0"}, {id: '0c', text: "0"}, {id: '3', text: "3"}],
        correctAnswer: JSON.stringify({"L":"5", "TTh":"2", "Th":"0a", "H":"0b", "T":"0c", "O":"3"}), 
        explanation: "5,20,003" 
    },
    { 
        id: 5002, subject: Subject.MATH, skillTag: "Geometry", 
        questionText: "Match the shape to its property.", 
        interactionType: InteractionType.MATCHING, 
        options: [
            {id: 'sq', text: "Square"}, {id: '4eq', text: "4 Equal Sides"},
            {id: 'rect', text: "Rectangle"}, {id: 'opp', text: "Opp Equal"},
            {id: 'scal', text: "Scalene"}, {id: 'no', text: "No Equal Sides"}
        ],
        correctAnswer: JSON.stringify({"sq":"4eq", "rect":"opp", "scal":"no"}), 
        explanation: "Square has equal sides; Rectangle has opposite equal; Scalene has none." 
    },
    { 
        id: 5003, subject: Subject.MATH, skillTag: "Rounding", 
        questionText: "Round 4,567 to the nearest 100.", 
        interactionType: InteractionType.SLIDER, 
        options: [{id: 'min', text: '4500'}, {id: 'max', text: '4600'}, {id: 'step', text: '10'}],
        correctAnswer: "4600", 
        explanation: "567 is closer to 600." 
    },
    { 
        id: 5004, subject: Subject.MATH, skillTag: "Mental Math", 
        questionText: "15 × 12 = ?", 
        interactionType: InteractionType.CALCULATOR, 
        correctAnswer: "180", 
        explanation: "15 x 10 = 150; 15 x 2 = 30; 150+30=180." 
    },
    { 
        id: 5005, subject: Subject.MATH, skillTag: "Angles", 
        questionText: "Classify the angles.", 
        interactionType: InteractionType.CATEGORIZE, 
        categories: [{id: 'ac', label: "Acute (<90)"}, {id: 'ob', label: "Obtuse (>90)"}],
        options: [
            {id: '30', text: "30°", bucketId: 'ac'}, 
            {id: '120', text: "120°", bucketId: 'ob'},
            {id: '89', text: "89°", bucketId: 'ac'},
            {id: '91', text: "91°", bucketId: 'ob'}
        ],
        correctAnswer: "Check Logic", 
        explanation: "Acute is less than 90, Obtuse is greater than 90." 
    },
    { 
        id: 5006, subject: Subject.MATH, skillTag: "Time", 
        questionText: "Set the clock to Quarter Past Eight.", 
        interactionType: InteractionType.CLOCK_BUILDER, 
        correctAnswer: "8:15", 
        explanation: "8:15 is quarter past eight." 
    },
    { 
        id: 5007, subject: Subject.MATH, skillTag: "Data Handling", 
        questionText: "If 1 🍎 = 5 fruits, how many fruits is 🍎🍎🍎?", 
        interactionType: InteractionType.INPUT, 
        correctAnswer: "15", 
        explanation: "3 x 5 = 15." 
    },
    { 
        id: 5008, subject: Subject.MATH, skillTag: "Measurement", 
        questionText: "Convert 3.5 kg to grams.", 
        interactionType: InteractionType.CALCULATOR, 
        correctAnswer: "3500", 
        explanation: "1kg = 1000g." 
    },
    { 
        id: 5009, subject: Subject.MATH, skillTag: "Patterns", 
        questionText: "Complete: 1, 4, 9, 16, ___", 
        interactionType: InteractionType.PATTERN_BUILDER, 
        options: [{id: 'config', text: "1,4,9,16"}],
        correctAnswer: "25", 
        explanation: "Square numbers: 1x1, 2x2, 3x3, 4x4, 5x5." 
    },
    { 
        id: 5010, subject: Subject.MATH, skillTag: "Factors", 
        questionText: "Select all Prime Numbers.", 
        interactionType: InteractionType.SELECTION_GRID, 
        options: [{id: '2', text: "2"}, {id: '9', text: "9"}, {id: '11', text: "11"}, {id: '15', text: "15"}],
        correctAnswer: ["2", "11"], 
        explanation: "2 and 11 have only two factors." 
    },
    { 
        id: 5011, subject: Subject.MATH, skillTag: "Fractions", 
        questionText: "Order from Smallest to Largest.", 
        interactionType: InteractionType.REORDER, 
        options: [{id: '1', text: "1/4"}, {id: '2', text: "1/2"}, {id: '3', text: "3/4"}],
        correctAnswer: ["1/4", "1/2", "3/4"], 
        explanation: "0.25, 0.5, 0.75" 
    },
    { 
        id: 5012, subject: Subject.MATH, skillTag: "Perimeter", 
        questionText: "Perimeter of square with side 6cm?", 
        interactionType: InteractionType.CALCULATOR, 
        correctAnswer: "24", 
        explanation: "6 x 4 = 24." 
    },
    { 
        id: 5013, subject: Subject.MATH, skillTag: "Roman Numerals", 
        questionText: "Value of 'L'?", 
        interactionType: InteractionType.INPUT, 
        correctAnswer: "50", 
        explanation: "L = 50." 
    },
    { 
        id: 5014, subject: Subject.MATH, skillTag: "Operations", 
        questionText: "100 ÷ 4 = ?", 
        interactionType: InteractionType.CALCULATOR, 
        correctAnswer: "25", 
        explanation: "Four quarters make a whole." 
    },

    // --- SCIENCE (13 Questions) ---
    { 
        id: 5015, subject: Subject.SCIENCE, skillTag: "Human Body", 
        questionText: "Locate the Lungs.", 
        interactionType: InteractionType.LOCATOR, 
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Digestive_system_diagram_en.svg/337px-Digestive_system_diagram_en.svg.png",
        options: [
            {id: 'lung', text: "Lungs (Breathing)", hotspot: {x: 45, y: 20, w: 25, h: 15}}, 
            {id: 'stom', text: "Stomach (Digestion)", hotspot: {x: 55, y: 40, w: 20, h: 15}}
        ],
        correctAnswer: "lung", 
        explanation: "Lungs are in the chest cavity." 
    },
    { 
        id: 5016, subject: Subject.SCIENCE, skillTag: "Solar System", 
        questionText: "Order planets from the Sun.", 
        interactionType: InteractionType.REORDER, 
        options: [],
        correctAnswer: ["Mercury", "Venus", "Earth", "Mars"], 
        explanation: "My Very Educated Mother..." 
    },
    { 
        id: 5017, subject: Subject.SCIENCE, skillTag: "States of Matter", 
        questionText: "Sort materials.", 
        interactionType: InteractionType.CATEGORIZE, 
        categories: [{id: 's', label: "Solid"}, {id: 'l', label: "Liquid"}, {id: 'g', label: "Gas"}],
        options: [
            {id: 'ice', text: "Ice", bucketId: 's'}, 
            {id: 'milk', text: "Milk", bucketId: 'l'},
            {id: 'vap', text: "Vapor", bucketId: 'g'}
        ],
        correctAnswer: "Check Logic", 
        explanation: "Physical states." 
    },
    { 
        id: 5018, subject: Subject.SCIENCE, skillTag: "Botany", 
        questionText: "Match part to function.", 
        interactionType: InteractionType.MATCHING, 
        options: [
            {id: 'r', text: "Root"}, {id: 'a', text: "Absorb Water"},
            {id: 'l', text: "Leaf"}, {id: 'p', text: "Make Food"},
            {id: 'f', text: "Flower"}, {id: 's', text: "Seeds"}
        ],
        correctAnswer: JSON.stringify({"r":"a", "l":"p", "f":"s"}), 
        explanation: "Plant biology basics." 
    },
    { 
        id: 5019, subject: Subject.SCIENCE, skillTag: "Force", 
        questionText: "Force that stops moving objects?", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'g', text: "Gravity"}, {id: 'f', text: "Friction"}], 
        correctAnswer: "f", 
        explanation: "Friction opposes motion." 
    },
    { 
        id: 5020, subject: Subject.SCIENCE, skillTag: "Nutrition", 
        questionText: "Which food builds muscles (Protein)?", 
        interactionType: InteractionType.SELECTION_GRID, 
        options: [
            {id: 'e', text: "Eggs", visual: "🥚"}, 
            {id: 'b', text: "Bread", visual: "🍞"}, 
            {id: 'f', text: "Fish", visual: "🐟"}
        ],
        correctAnswer: ["e", "f"], 
        explanation: "Eggs and Fish are protein-rich." 
    },
    { 
        id: 5021, subject: Subject.SCIENCE, skillTag: "Water Cycle", 
        questionText: "Rain is also called...", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'p', text: "Precipitation"}, {id: 'c', text: "Condensation"}], 
        correctAnswer: "p", 
        explanation: "Water falling from clouds." 
    },
    { 
        id: 5022, subject: Subject.SCIENCE, skillTag: "Environment", 
        questionText: "Is plastic biodegradable?", 
        interactionType: InteractionType.BINARY, 
        options: [{id: 'y', text: "Yes"}, {id: 'n', text: "No"}], 
        correctAnswer: "n", 
        explanation: "Plastic persists for years." 
    },
    { 
        id: 5023, subject: Subject.SCIENCE, skillTag: "Animals", 
        questionText: "Select Vertebrates (Backbone).", 
        interactionType: InteractionType.SELECTION_GRID, 
        options: [{id: 'd', text: "Dog"}, {id: 'w', text: "Worm"}, {id: 's', text: "Snake"}], 
        correctAnswer: ["d", "s"], 
        explanation: "Dogs and snakes have spines." 
    },
    { 
        id: 5024, subject: Subject.SCIENCE, skillTag: "Light", 
        questionText: "Shadows are shortest at...", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'n', text: "Noon"}, {id: 'm', text: "Morning"}], 
        correctAnswer: "n", 
        explanation: "Sun is overhead." 
    },
    { 
        id: 5025, subject: Subject.SCIENCE, skillTag: "Materials", 
        questionText: "Conductor of Electricity?", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'c', text: "Copper"}, {id: 'p', text: "Plastic"}], 
        correctAnswer: "c", 
        explanation: "Metals conduct." 
    },
    { 
        id: 5026, subject: Subject.SCIENCE, skillTag: "Simple Machines", 
        questionText: "A see-saw is a...", 
        interactionType: InteractionType.INPUT, 
        correctAnswer: "Lever", 
        explanation: "Class 1 Lever." 
    },
    { 
        id: 5027, subject: Subject.SCIENCE, skillTag: "Health", 
        questionText: "Lack of Iron causes...", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'a', text: "Anaemia"}, {id: 'v', text: "Viral"}], 
        correctAnswer: "a", 
        explanation: "Iron deficiency." 
    },

    // --- ENGLISH (13 Questions) ---
    { 
        id: 5028, subject: Subject.ENGLISH, skillTag: "Parts of Speech", 
        questionText: "Identify the Adjective.", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'r', text: "Red"}, {id: 'a', text: "Apple"}, {id: 'e', text: "Eat"}], 
        correctAnswer: "r", 
        explanation: "Red describes the apple." 
    },
    { 
        id: 5029, subject: Subject.ENGLISH, skillTag: "Tenses", 
        questionText: "Select Past Tense verbs.", 
        interactionType: InteractionType.SELECTION_GRID, 
        options: [{id: 'w', text: "Went"}, {id: 'g', text: "Go"}, {id: 'p', text: "Played"}], 
        correctAnswer: ["w", "p"], 
        explanation: "Actions completed in past." 
    },
    { 
        id: 5030, subject: Subject.ENGLISH, skillTag: "Antonyms", 
        questionText: "Match opposites.", 
        interactionType: InteractionType.MATCHING, 
        options: [
            {id: 'h', text: "Hot"}, {id: 'c', text: "Cold"},
            {id: 'b', text: "Big"}, {id: 's', text: "Small"},
            {id: 'f', text: "Fast"}, {id: 'sl', text: "Slow"}
        ],
        correctAnswer: JSON.stringify({"h":"c", "b":"s", "f":"sl"}), 
        explanation: "Opposite meanings." 
    },
    { 
        id: 5031, subject: Subject.ENGLISH, skillTag: "Sentence Structure", 
        questionText: "Unscramble the sentence.", 
        interactionType: InteractionType.REORDER, 
        options: [], 
        correctAnswer: ["The", "sun", "is", "hot"], 
        explanation: "Subject + Verb + Adjective." 
    },
    { 
        id: 5032, subject: Subject.ENGLISH, skillTag: "Prepositions", 
        questionText: "The cat is ___ the box.", 
        interactionType: InteractionType.DRAG_TO_SLOTS, 
        categories: [{id: 'p', label: "Position"}],
        options: [{id: 'in', text: "in"}, {id: 'at', text: "at"}, {id: 'of', text: "of"}],
        correctAnswer: JSON.stringify({"p":"in"}), 
        explanation: "Inside location." 
    },
    { 
        id: 5033, subject: Subject.ENGLISH, skillTag: "Homophones", 
        questionText: "I ___ a book.", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'red', text: "Red"}, {id: 'read', text: "Read"}], 
        correctAnswer: "read", 
        explanation: "Action of reading." 
    },
    { 
        id: 5034, subject: Subject.ENGLISH, skillTag: "Articles", 
        questionText: "___ elephant.", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'a', text: "A"}, {id: 'an', text: "An"}], 
        correctAnswer: "an", 
        explanation: "Vowel sound." 
    },
    { 
        id: 5035, subject: Subject.ENGLISH, skillTag: "Spelling", 
        questionText: "Select correct spelling.", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'f', text: "Friend"}, {id: 'fr', text: "Frend"}], 
        correctAnswer: "f", 
        explanation: "i before e rule." 
    },
    { 
        id: 5036, subject: Subject.ENGLISH, skillTag: "Pronouns", 
        questionText: "___ are playing.", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 't', text: "They"}, {id: 'h', text: "He"}], 
        correctAnswer: "t", 
        explanation: "Plural subject for 'are'." 
    },
    { 
        id: 5037, subject: Subject.ENGLISH, skillTag: "Conjunctions", 
        questionText: "Bread ___ Butter.", 
        interactionType: InteractionType.WORD_SELECT, 
        options: [{id: 'a', text: "And"}, {id: 'o', text: "Or"}], 
        correctAnswer: "a", 
        explanation: "Pairing." 
    },
    { 
        id: 5038, subject: Subject.ENGLISH, skillTag: "Punctuation", 
        questionText: "Mark for a question?", 
        interactionType: InteractionType.SELECTION_GRID, 
        options: [{id: 'q', text: "?"}, {id: 'e', text: "!"}, {id: 'c', text: ","}], 
        correctAnswer: ["q"], 
        explanation: "Question mark." 
    },
    { 
        id: 5039, subject: Subject.ENGLISH, skillTag: "Voice", 
        questionText: "Is 'Ball was kicked' Passive?", 
        interactionType: InteractionType.BINARY, 
        options: [{id: 'y', text: "Yes"}, {id: 'n', text: "No"}], 
        correctAnswer: "y", 
        explanation: "Action done to subject." 
    },
    { 
        id: 5040, subject: Subject.ENGLISH, skillTag: "Vocabulary", 
        questionText: "Young one of a Cat?", 
        interactionType: InteractionType.INPUT, 
        correctAnswer: "Kitten", 
        explanation: "Baby cat." 
    }
];
