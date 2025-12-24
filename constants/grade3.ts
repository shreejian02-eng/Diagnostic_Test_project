import { Question, Subject, InteractionType } from '../types';

export const GRADE_3_QUESTIONS: Question[] = [
  // --- MATH (14) ---
  {
    id: 3001, subject: Subject.MATH, skillTag: "Place Value", questionText: "Build the number 53 using digits.",
    interactionType: InteractionType.DRAG_TO_SLOTS,
    categories: [{ id: 'tens', label: "Tens" }, { id: 'ones', label: "Ones" }],
    options: [{ id: 'opt1', text: "5" }, { id: 'opt2', text: "3" }, { id: 'opt3', text: "0" }],
    correctAnswer: JSON.stringify({ "tens": "5", "ones": "3" }), explanation: "5 tens and 3 ones make 53."
  },
  {
    id: 3002, subject: Subject.MATH, skillTag: "Pattern Recognition", questionText: "Complete the pattern: 2, 4, 6, 8...",
    interactionType: InteractionType.PATTERN_BUILDER, options: [{ id: 'config', text: "2,4,6,8" }],
    correctAnswer: "10", explanation: "Add 2 to the previous number."
  },
  {
    id: 3003, subject: Subject.MATH, skillTag: "Subtraction", questionText: "You have 12 apples. Eat 4 of them!",
    interactionType: InteractionType.OBJECT_ARITHMETIC, options: [{ id: 'total', text: "12" }],
    correctAnswer: "8", explanation: "12 - 4 = 8."
  },
  {
    id: 3004, subject: Subject.MATH, skillTag: "Geometry", questionText: "Tap the shape with 3 corners.",
    interactionType: InteractionType.SELECTION_GRID,
    options: [{ id: 'sq', text: "Square", visual: "🟦" }, { id: 'tri', text: "Triangle", visual: "🔺" }],
    correctAnswer: ["tri"], explanation: "Triangles have 3 corners."
  },
  {
    id: 3005, subject: Subject.MATH, skillTag: "Mental Math", questionText: "15 + 8 = ?",
    interactionType: InteractionType.CALCULATOR, correctAnswer: "23", explanation: "15 + 5 + 3 = 23."
  },
  {
    id: 3006, subject: Subject.MATH, skillTag: "Measurement", questionText: "Which is heaviest?",
    interactionType: InteractionType.WEIGHT_BALANCE,
    options: [{ id: 'A', text: "Feather" }, { id: 'B', text: "Car" }],
    correctAnswer: "B", explanation: "A car is much heavier."
  },
  {
    id: 3007, subject: Subject.MATH, skillTag: "Ordering", questionText: "Smallest to Largest.",
    interactionType: InteractionType.REORDER,
    options: [], correctAnswer: ["23", "45", "98", "101"], explanation: "Ascending order."
  },
  {
    id: 3008, subject: Subject.MATH, skillTag: "Time Logic", questionText: "After Monday comes...",
    interactionType: InteractionType.TIMELINE, correctAnswer: "Tuesday", explanation: "Days of the week."
  },
  {
    id: 3009, subject: Subject.MATH, skillTag: "Measurement", questionText: "Length of small ruler (cm)?",
    interactionType: InteractionType.SLIDER, options: [{id:'min', text:'0'}, {id:'max', text:'30'}],
    correctAnswer: "15", explanation: "Standard small ruler is 15cm."
  },
  {
    id: 3010, subject: Subject.MATH, skillTag: "Money", questionText: "3 coins of 5 Rupees = ?",
    interactionType: InteractionType.COIN_BUILDER, correctAnswer: "15", explanation: "3 x 5 = 15."
  },
  {
    id: 3011, subject: Subject.MATH, skillTag: "Time Reading", questionText: "Set clock to 3:00.",
    interactionType: InteractionType.CLOCK_BUILDER, correctAnswer: "3:00", explanation: "3 O'Clock."
  },
  {
    id: 3012, subject: Subject.MATH, skillTag: "Number Properties", questionText: "Sort Odd / Even.",
    interactionType: InteractionType.CATEGORIZE,
    categories: [{id:'odd', label:'Odd'}, {id:'even', label:'Even'}],
    options: [{id:'1', text:'7', bucketId:'odd'}, {id:'2', text:'4', bucketId:'even'}],
    correctAnswer: "Check Logic", explanation: "Ends in 1,3,5,7,9 is Odd."
  },
  {
    id: 3013, subject: Subject.MATH, skillTag: "Addition", questionText: "20 + 20 = ?",
    interactionType: InteractionType.CALCULATOR, correctAnswer: "40", explanation: "2 tens + 2 tens = 4 tens."
  },
  {
    id: 3014, subject: Subject.MATH, skillTag: "Comparisons", questionText: "Which is bigger?",
    interactionType: InteractionType.BINARY, options: [{id:'a', text:'100'}, {id:'b', text:'50'}],
    correctAnswer: "a", explanation: "100 > 50."
  },

  // --- SCIENCE (13) ---
  {
    id: 3015, subject: Subject.SCIENCE, skillTag: "Biology", questionText: "Needs food to grow?",
    interactionType: InteractionType.SELECTION_GRID, options: [{id:'c', text:'Car'}, {id:'t', text:'Tree'}],
    correctAnswer: ["t"], explanation: "Living things grow."
  },
  {
    id: 3016, subject: Subject.SCIENCE, skillTag: "Senses", questionText: "Match Body Part to Sense.",
    interactionType: InteractionType.MATCHING,
    options: [
        {id:'n', text:'Nose'}, {id:'s', text:'Smell'},
        {id:'e', text:'Eye'}, {id:'si', text:'Sight'},
        {id:'ea', text:'Ear'}, {id:'so', text:'Sound'}
    ],
    correctAnswer: JSON.stringify({"n":"s", "e":"si", "ea":"so"}),
    explanation: "We smell with nose, see with eyes, hear with ears."
  },
  {
    id: 3017, subject: Subject.SCIENCE, skillTag: "Animals", questionText: "Sort by Diet.",
    interactionType: InteractionType.CATEGORIZE, categories: [{id:'p', label:'Plant Eater'}, {id:'m', label:'Meat Eater'}],
    options: [{id:'c', text:'Cow', bucketId:'p'}, {id:'l', text:'Lion', bucketId:'m'}],
    correctAnswer: "Check Logic", explanation: "Herbivores vs Carnivores."
  },
  {
    id: 3018, subject: Subject.SCIENCE, skillTag: "Environment", questionText: "Is River a water source?",
    interactionType: InteractionType.BINARY, options: [{id:'y', text:'Yes'}, {id:'n', text:'No'}],
    correctAnswer: "y", explanation: "Natural water source."
  },
  {
    id: 3019, subject: Subject.SCIENCE, skillTag: "Geography", questionText: "Where is South America? Find it!",
    interactionType: InteractionType.LOCATOR,
    backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/640px-World_map_-_low_resolution.svg.png",
    options: [
        {id:'sa', text:'South America', hotspot: {x: 28, y: 65, w: 10, h: 20}},
        {id:'af', text:'Africa', hotspot: {x: 50, y: 50, w: 15, h: 20}}
    ],
    correctAnswer: "sa", 
    explanation: "South America is below North America."
  },
  {
    id: 3020, subject: Subject.SCIENCE, skillTag: "Planets", questionText: "We live on...",
    interactionType: InteractionType.WORD_SELECT, options: [{id:'e', text:'Earth'}, {id:'m', text:'Mars'}],
    correctAnswer: "e", explanation: "Planet Earth."
  },
  {
    id: 3021, subject: Subject.SCIENCE, skillTag: "Physics", questionText: "Sun gives us...",
    interactionType: InteractionType.SELECTION_GRID, options: [{id:'h', text:'Heat'}, {id:'l', text:'Light'}, {id:'i', text:'Ice'}],
    correctAnswer: ["h", "l"], explanation: "Sun provides heat and light."
  },
  {
    id: 3022, subject: Subject.SCIENCE, skillTag: "Materials", questionText: "Is glass transparent?",
    interactionType: InteractionType.BINARY, options: [{id:'y', text:'Yes'}, {id:'n', text:'No'}],
    correctAnswer: "y", explanation: "Light passes through."
  },
  {
    id: 3023, subject: Subject.SCIENCE, skillTag: "Botany", questionText: "Plants need ___ to grow.",
    interactionType: InteractionType.WORD_SELECT, options: [{id:'s', text:'Sunlight'}, {id:'d', text:'Darkness'}],
    correctAnswer: "s", explanation: "Photosynthesis needs light."
  },
  {
    id: 3024, subject: Subject.SCIENCE, skillTag: "Health", questionText: "Brush teeth...",
    interactionType: InteractionType.MULTIPLE_CHOICE, options: [{id:'d', text:'Daily'}, {id:'n', text:'Never'}],
    correctAnswer: "d", explanation: "Hygiene."
  },
  {
    id: 3025, subject: Subject.SCIENCE, skillTag: "Weather", questionText: "Rain comes from...",
    interactionType: InteractionType.WORD_SELECT, options: [{id:'c', text:'Clouds'}, {id:'g', text:'Ground'}],
    correctAnswer: "c", explanation: "Precipitation."
  },
  {
    id: 3026, subject: Subject.SCIENCE, skillTag: "Force", questionText: "Push or Pull is...",
    interactionType: InteractionType.INPUT, correctAnswer: "Force", explanation: "Definition of force."
  },
  {
    id: 3027, subject: Subject.SCIENCE, skillTag: "Animals", questionText: "Birds have...",
    interactionType: InteractionType.SELECTION_GRID, options: [{id:'w', text:'Wings'}, {id:'f', text:'Fins'}],
    correctAnswer: ["w"], explanation: "For flying."
  },

  // --- ENGLISH (13) ---
  {
    id: 3028, subject: Subject.ENGLISH, skillTag: "Plurals", questionText: "One Cat, Two...",
    interactionType: InteractionType.WORD_SELECT, options: [{id:'c', text:'Cats'}, {id:'k', text:'Cat'}],
    correctAnswer: "c", explanation: "Add 's'."
  },
  {
    id: 3029, subject: Subject.ENGLISH, skillTag: "Verbs", questionText: "Action word?",
    interactionType: InteractionType.SELECTION_GRID, options: [{id:'r', text:'Run'}, {id:'b', text:'Boy'}],
    correctAnswer: ["r"], explanation: "Run is a verb."
  },
  {
    id: 3030, subject: Subject.ENGLISH, skillTag: "Prepositions", questionText: "Ball is ___ the box.",
    interactionType: InteractionType.DRAG_TO_SLOTS, categories: [{id:'p', label:'Pos'}], options: [{id:'i', text:'in'}, {id:'z', text:'z'}],
    correctAnswer: JSON.stringify({"p":"i"}), explanation: "In the box."
  },
  {
    id: 3031, subject: Subject.ENGLISH, skillTag: "Sentence", questionText: "Make a sentence.",
    interactionType: InteractionType.REORDER, options: [], correctAnswer: ["Sky", "is", "blue"], explanation: "SVO."
  },
  {
    id: 3032, subject: Subject.ENGLISH, skillTag: "Opposites", questionText: "Match the opposites.",
    interactionType: InteractionType.MATCHING,
    options: [
        {id:'h', text:'Hot'}, {id:'c', text:'Cold'},
        {id:'b', text:'Big'}, {id:'s', text:'Small'},
        {id:'u', text:'Up'}, {id:'d', text:'Down'}
    ],
    correctAnswer: JSON.stringify({"h":"c", "b":"s", "u":"d"}),
    explanation: "Pairing opposite meanings."
  },
  {
    id: 3033, subject: Subject.ENGLISH, skillTag: "Pronouns", questionText: "___ is a boy.",
    interactionType: InteractionType.WORD_SELECT, options: [{id:'h', text:'He'}, {id:'s', text:'She'}],
    correctAnswer: "h", explanation: "He for male."
  },
  {
    id: 3034, subject: Subject.ENGLISH, skillTag: "Articles", questionText: "It is ___ apple.",
    interactionType: InteractionType.WORD_SELECT, options: [{id:'a', text:'an'}, {id:'b', text:'a'}],
    correctAnswer: "a", explanation: "Vowel sound."
  },
  {
    id: 3035, subject: Subject.ENGLISH, skillTag: "Rhyme", questionText: "Rhymes with Bat?",
    interactionType: InteractionType.WORD_SELECT, options: [{id:'c', text:'Cat'}, {id:'d', text:'Dog'}],
    correctAnswer: "c", explanation: "Bat-Cat."
  },
  {
    id: 3036, subject: Subject.ENGLISH, skillTag: "Spelling", questionText: "Correct spelling?",
    interactionType: InteractionType.WORD_SELECT, options: [{id:'d', text:'Dog'}, {id:'dw', text:'Dawg'}],
    correctAnswer: "d", explanation: "Dog."
  },
  {
    id: 3037, subject: Subject.ENGLISH, skillTag: "Nouns", questionText: "Select the thing.",
    interactionType: InteractionType.SELECTION_GRID, options: [{id:'t', text:'Table'}, {id:'j', text:'Jump'}],
    correctAnswer: ["t"], explanation: "Table is a noun."
  },
  {
    id: 3038, subject: Subject.ENGLISH, skillTag: "Adjectives", questionText: "The ___ sun.",
    interactionType: InteractionType.WORD_SELECT, options: [{id:'y', text:'Yellow'}, {id:'s', text:'Slow'}],
    correctAnswer: "y", explanation: "Description."
  },
  {
    id: 3039, subject: Subject.ENGLISH, skillTag: "Punctuation", questionText: "End a question with...",
    interactionType: InteractionType.SELECTION_GRID, options: [{id:'q', text:'?'}, {id:'d', text:'.'}],
    correctAnswer: ["q"], explanation: "Question mark."
  },
  {
    id: 3040, subject: Subject.ENGLISH, skillTag: "Alphabet", questionText: "First letter?",
    interactionType: InteractionType.INPUT, correctAnswer: "A", explanation: "A is first."
  }
];