import { Question, Subject, InteractionType } from '../types';

export const GRADE_4_QUESTIONS: Question[] = [
    // --- MATH (14) ---
    { id: 4001, subject: Subject.MATH, skillTag: "Place Value", questionText: "Build 4306.", interactionType: InteractionType.DRAG_TO_SLOTS, categories:[{id:'th', label:'Th'},{id:'h', label:'H'},{id:'t', label:'T'},{id:'o', label:'O'}], options:[{id:'4', text:'4'},{id:'3', text:'3'},{id:'0', text:'0'},{id:'6', text:'6'}], correctAnswer: JSON.stringify({"th":"4","h":"3","t":"0","o":"6"}), explanation: "Place value." },
    { id: 4002, subject: Subject.MATH, skillTag: "Rounding", questionText: "Round 14 to nearest 10.", interactionType: InteractionType.SLIDER, options:[{id:'min', text:'10'},{id:'max', text:'20'}], correctAnswer: "10", explanation: "4 rounds down." },
    { id: 4003, subject: Subject.MATH, skillTag: "Multiplication", questionText: "9x9 = ?", interactionType: InteractionType.CALCULATOR, correctAnswer: "81", explanation: "Square." },
    { id: 4004, subject: Subject.MATH, skillTag: "Addition", questionText: "4500 + 200", interactionType: InteractionType.CALCULATOR, correctAnswer: "4700", explanation: "Add hundreds." },
    { id: 4005, subject: Subject.MATH, skillTag: "Division", questionText: "24 / 4", interactionType: InteractionType.CALCULATOR, correctAnswer: "6", explanation: "Basic division." },
    { id: 4006, subject: Subject.MATH, skillTag: "Fractions", questionText: "Select 1/4", interactionType: InteractionType.SELECTION_GRID, options:[{id:'q', text:'1/4'},{id:'h', text:'1/2'}], correctAnswer: ["q"], explanation: "Quarter." },
    { id: 4007, subject: Subject.MATH, skillTag: "Money", questionText: "Make 2 Rupees (50p x 4)", interactionType: InteractionType.OBJECT_ARITHMETIC, options:[{id:'total', text:'4'}], correctAnswer: "4", explanation: "4 coins." },
    { id: 4008, subject: Subject.MATH, skillTag: "Time", questionText: "Mins in hour?", interactionType: InteractionType.SLIDER, options:[{id:'max', text:'100'}], correctAnswer: "60", explanation: "60 mins." },
    { id: 4009, subject: Subject.MATH, skillTag: "Shapes", questionText: "Find Rectangle", interactionType: InteractionType.SELECTION_GRID, options:[{id:'r', text:'Rec'},{id:'c', text:'Cir'}], correctAnswer: ["r"], explanation: "4 sides." },
    { id: 4010, subject: Subject.MATH, skillTag: "Pattern", questionText: "10, 20, 30...", interactionType: InteractionType.PATTERN_BUILDER, options:[{id:'config', text:'10,20,30'}], correctAnswer: "40", explanation: "Skip count 10." },
    { id: 4011, subject: Subject.MATH, skillTag: "Subtraction", questionText: "100 - 50", interactionType: InteractionType.CALCULATOR, correctAnswer: "50", explanation: "Half." },
    { id: 4012, subject: Subject.MATH, skillTag: "Geometry", questionText: "Sides of pentagon?", interactionType: InteractionType.INPUT, correctAnswer: "5", explanation: "Penta means 5." },
    { id: 4013, subject: Subject.MATH, skillTag: "Even/Odd", questionText: "Is 45 Odd?", interactionType: InteractionType.BINARY, options:[{id:'t', text:'Yes'},{id:'f', text:'No'}], correctAnswer: "t", explanation: "Ends in 5." },
    { id: 4014, subject: Subject.MATH, skillTag: "Measurement", questionText: "100cm = 1...", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Meter'},{id:'k', text:'Km'}], correctAnswer: "m", explanation: "Metric." },

    // --- SCIENCE (13) ---
    { id: 4015, subject: Subject.SCIENCE, skillTag: "Plants", questionText: "Leaves make...", interactionType: InteractionType.WORD_SELECT, options:[{id:'f', text:'Food'},{id:'w', text:'Water'}], correctAnswer: "f", explanation: "Photosynthesis." },
    { id: 4016, subject: Subject.SCIENCE, skillTag: "Amphibians", questionText: "Frog lives on...", interactionType: InteractionType.SELECTION_GRID, options:[{id:'l', text:'Land'},{id:'w', text:'Water'}], correctAnswer: ["l", "w"], explanation: "Both." },
    { id: 4017, subject: Subject.SCIENCE, skillTag: "Matter", questionText: "Sort.", interactionType: InteractionType.CATEGORIZE, categories:[{id:'s', label:'Solid'},{id:'l', label:'Liquid'}], options:[{id:'r', text:'Rock', bucketId:'s'},{id:'w', text:'Water', bucketId:'l'}], correctAnswer: "Check Logic", explanation: "States." },
    { id: 4018, subject: Subject.SCIENCE, skillTag: "Physics", questionText: "Stone floats?", interactionType: InteractionType.BINARY, options:[{id:'y', text:'Yes'},{id:'n', text:'No'}], correctAnswer: "n", explanation: "Sinks." },
    { id: 4019, subject: Subject.SCIENCE, skillTag: "Space", questionText: "Sun is a...", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Star'},{id:'p', text:'Planet'}], correctAnswer: "s", explanation: "Star." },
    { id: 4020, subject: Subject.SCIENCE, skillTag: "Body", questionText: "Match organ to job.", 
      interactionType: InteractionType.MATCHING,
      options: [
        {id:'h', text:'Heart'}, {id:'p', text:'Pumps Blood'},
        {id:'l', text:'Lungs'}, {id:'b', text:'Breathe'},
        {id:'s', text:'Stomach'}, {id:'d', text:'Digest'}
      ],
      correctAnswer: JSON.stringify({"h":"p", "l":"b", "s":"d"}),
      explanation: "Key organ functions."
    },
    { id: 4021, subject: Subject.SCIENCE, skillTag: "Force", questionText: "Gravity pulls...", interactionType: InteractionType.WORD_SELECT, options:[{id:'d', text:'Down'},{id:'u', text:'Up'}], correctAnswer: "d", explanation: "To earth." },
    { id: 4022, subject: Subject.SCIENCE, skillTag: "Energy", questionText: "Food gives...", interactionType: InteractionType.INPUT, correctAnswer: "Energy", explanation: "Fuel." },
    { id: 4023, subject: Subject.SCIENCE, skillTag: "Environment", questionText: "Save water?", interactionType: InteractionType.BINARY, options:[{id:'y', text:'Yes'},{id:'n', text:'No'}], correctAnswer: "y", explanation: "Conservation." },
    { id: 4024, subject: Subject.SCIENCE, skillTag: "Animals", questionText: "Fish breathe with...", interactionType: InteractionType.WORD_SELECT, options:[{id:'g', text:'Gills'},{id:'l', text:'Lungs'}], correctAnswer: "g", explanation: "Underwater." },
    { id: 4025, subject: Subject.SCIENCE, skillTag: "Materials", questionText: "Wood is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'Hard'},{id:'s', text:'Soft'}], correctAnswer: "h", explanation: "Solid." },
    { id: 4026, subject: Subject.SCIENCE, skillTag: "Weather", questionText: "Match tool to measure.",
      interactionType: InteractionType.MATCHING,
      options: [
        {id:'t', text:'Thermometer'}, {id:'tm', text:'Temp'},
        {id:'r', text:'Rain Gauge'}, {id:'rm', text:'Rain'},
        {id:'v', text:'Wind Vane'}, {id:'vm', text:'Wind Dir'}
      ],
      correctAnswer: JSON.stringify({"t":"tm", "r":"rm", "v":"vm"}),
      explanation: "Tools for weather."
    },
    { id: 4027, subject: Subject.SCIENCE, skillTag: "Light", questionText: "Shadows need...", interactionType: InteractionType.WORD_SELECT, options:[{id:'l', text:'Light'},{id:'d', text:'Dark'}], correctAnswer: "l", explanation: "Block light." },

    // --- ENGLISH (13) ---
    { id: 4028, subject: Subject.ENGLISH, skillTag: "Grammar", questionText: "Select Noun.", interactionType: InteractionType.WORD_SELECT, options:[{id:'b', text:'Boy'},{id:'r', text:'Run'}], correctAnswer: "b", explanation: "Person." },
    { id: 4029, subject: Subject.ENGLISH, skillTag: "Antonyms", questionText: "Match Opposites.",
      interactionType: InteractionType.MATCHING,
      options: [
        {id:'h', text:'Heavy'}, {id:'l', text:'Light'},
        {id:'f', text:'Fast'}, {id:'s', text:'Slow'},
        {id:'n', text:'New'}, {id:'o', text:'Old'}
      ],
      correctAnswer: JSON.stringify({"h":"l", "f":"s", "n":"o"}),
      explanation: "Pairs of antonyms."
    },
    { id: 4030, subject: Subject.ENGLISH, skillTag: "Structure", questionText: "Reorder.", interactionType: InteractionType.REORDER, options:[], correctAnswer: ["I", "run", "fast"], explanation: "SVO." },
    { id: 4031, subject: Subject.ENGLISH, skillTag: "Punctuation", questionText: "End mark.", interactionType: InteractionType.SELECTION_GRID, options:[{id:'d', text:'.'},{id:'c', text:','}], correctAnswer: ["d"], explanation: "Period." },
    { id: 4032, subject: Subject.ENGLISH, skillTag: "Spelling", questionText: "Because", interactionType: InteractionType.WORD_SELECT, options:[{id:'r', text:'Because'},{id:'w', text:'Becoz'}], correctAnswer: "r", explanation: "Spelling." },
    { id: 4033, subject: Subject.ENGLISH, skillTag: "Past Tense", questionText: "Go -> ...", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Went'},{id:'g', text:'Goed'}], correctAnswer: "w", explanation: "Irregular." },
    { id: 4034, subject: Subject.ENGLISH, skillTag: "Adjectives", questionText: "Red apple.", interactionType: InteractionType.WORD_SELECT, options:[{id:'r', text:'Red'},{id:'a', text:'Apple'}], correctAnswer: "r", explanation: "Color." },
    { id: 4035, subject: Subject.ENGLISH, skillTag: "Pronouns", questionText: "Mary is nice. ___ helps.", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'She'},{id:'h', text:'He'}], correctAnswer: "s", explanation: "Female." },
    { id: 4036, subject: Subject.ENGLISH, skillTag: "Homophones", questionText: "I ___ you.", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'See'},{id:'sea', text:'Sea'}], correctAnswer: "s", explanation: "Vision." },
    { id: 4037, subject: Subject.ENGLISH, skillTag: "Preposition", questionText: "Go ___ school.", interactionType: InteractionType.WORD_SELECT, options:[{id:'t', text:'To'},{id:'a', text:'At'}], correctAnswer: "t", explanation: "Direction." },
    { id: 4038, subject: Subject.ENGLISH, skillTag: "Conjunction", questionText: "Bread ___ Butter", interactionType: InteractionType.WORD_SELECT, options:[{id:'a', text:'And'},{id:'o', text:'Or'}], correctAnswer: "a", explanation: "Join." },
    { id: 4039, subject: Subject.ENGLISH, skillTag: "Vocabulary", questionText: "Happy means...", interactionType: InteractionType.WORD_SELECT, options:[{id:'j', text:'Joy'},{id:'s', text:'Sad'}], correctAnswer: "j", explanation: "Synonym." },
    { id: 4040, subject: Subject.ENGLISH, skillTag: "Capitalization", questionText: "india or India?", interactionType: InteractionType.WORD_SELECT, options:[{id:'i', text:'India'},{id:'l', text:'india'}], correctAnswer: "i", explanation: "Proper noun." }
];