import { Question, Subject, InteractionType } from '../types';

export const GRADE_8_QUESTIONS: Question[] = [
    // --- MATH (14) ---
    { id: 8001, subject: Subject.MATH, skillTag: "Algebra", questionText: "2x = 10", interactionType: InteractionType.INPUT, correctAnswer: "5", explanation: "x=5." },
    { id: 8002, subject: Subject.MATH, skillTag: "Rational #", questionText: "Is 0 rational?", interactionType: InteractionType.BINARY, options:[{id:'y', text:'Yes'},{id:'n', text:'No'}], correctAnswer: "y", explanation: "0/1." },
    { id: 8003, subject: Subject.MATH, skillTag: "Quadrilaterals", questionText: "Sum of angles?", interactionType: InteractionType.CALCULATOR, correctAnswer: "360", explanation: "Internal sum." },
    { id: 8004, subject: Subject.MATH, skillTag: "Data", questionText: "Pie chart is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Circle'},{id:'b', text:'Bar'}], correctAnswer: "c", explanation: "360 deg." },
    { id: 8005, subject: Subject.MATH, skillTag: "Squares", questionText: "Sqrt(64)", interactionType: InteractionType.CALCULATOR, correctAnswer: "8", explanation: "8x8." },
    { id: 8006, subject: Subject.MATH, skillTag: "Cubes", questionText: "Cube root 27", interactionType: InteractionType.CALCULATOR, correctAnswer: "3", explanation: "3x3x3." },
    { id: 8007, subject: Subject.MATH, skillTag: "Percent", questionText: "50% of 200", interactionType: InteractionType.CALCULATOR, correctAnswer: "100", explanation: "Half." },
    { id: 8008, subject: Subject.MATH, skillTag: "Algebra", questionText: "(a+b)^2", interactionType: InteractionType.MULTIPLE_CHOICE, options:[{id:'1', text:'a^2+2ab+b^2'},{id:'2', text:'a^2+b^2'}], correctAnswer: "1", explanation: "Identity." },
    { id: 8009, subject: Subject.MATH, skillTag: "Solid Shapes", questionText: "Faces of Cube?", interactionType: InteractionType.INPUT, correctAnswer: "6", explanation: "Flat sides." },
    { id: 8010, subject: Subject.MATH, skillTag: "Mensuration", questionText: "Vol of Cube side 2", interactionType: InteractionType.CALCULATOR, correctAnswer: "8", explanation: "2^3." },
    { id: 8011, subject: Subject.MATH, skillTag: "Exponents", questionText: "2^3", interactionType: InteractionType.CALCULATOR, correctAnswer: "8", explanation: "2x2x2." },
    { id: 8012, subject: Subject.MATH, skillTag: "Proportions", questionText: "Direct prop?", interactionType: InteractionType.BINARY, options:[{id:'y', text:'x/y=k'},{id:'n', text:'xy=k'}], correctAnswer: "y", explanation: "Ratio constant." },
    { id: 8013, subject: Subject.MATH, skillTag: "Factorization", questionText: "Common in 2x, 4", interactionType: InteractionType.INPUT, correctAnswer: "2", explanation: "HCF." },
    { id: 8014, subject: Subject.MATH, skillTag: "Graphs", questionText: "Origin?", interactionType: InteractionType.WORD_SELECT, options:[{id:'0', text:'0,0'},{id:'1', text:'1,1'}], correctAnswer: "0", explanation: "Start." },

    // --- SCIENCE (13) ---
    { id: 8015, subject: Subject.SCIENCE, skillTag: "Crops", questionText: "Kharif season?", interactionType: InteractionType.WORD_SELECT, options:[{id:'r', text:'Rainy'},{id:'w', text:'Winter'}], correctAnswer: "r", explanation: "Monsoon." },
    { id: 8016, subject: Subject.SCIENCE, skillTag: "Microbes", questionText: "Virus?", interactionType: InteractionType.SELECTION_GRID, options:[{id:'f', text:'Flu'},{id:'b', text:'Bread'}], correctAnswer: ["f"], explanation: "Disease." },
    { id: 8017, subject: Subject.SCIENCE, skillTag: "Materials", questionText: "Synthetic?", interactionType: InteractionType.WORD_SELECT, options:[{id:'n', text:'Nylon'},{id:'c', text:'Cotton'}], correctAnswer: "n", explanation: "Man-made." },
    { id: 8018, subject: Subject.SCIENCE, skillTag: "Metals", questionText: "Liquid metal?", interactionType: InteractionType.INPUT, correctAnswer: "Mercury", explanation: "Hg." },
    { id: 8019, subject: Subject.SCIENCE, skillTag: "Fuel", questionText: "Fossil fuel?", interactionType: InteractionType.SELECTION_GRID, options:[{id:'c', text:'Coal'},{id:'w', text:'Wood'}], correctAnswer: ["c"], explanation: "Ancient." },
    { id: 8020, subject: Subject.SCIENCE, skillTag: "Combustion", questionText: "Needs...", interactionType: InteractionType.WORD_SELECT, options:[{id:'o', text:'Oxygen'},{id:'n', text:'Nitrogen'}], correctAnswer: "o", explanation: "Burn." },
    { id: 8021, subject: Subject.SCIENCE, skillTag: "Cells", questionText: "Powerhouse?", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Mito'},{id:'n', text:'Nuc'}], correctAnswer: "m", explanation: "Energy." },
    { id: 8022, subject: Subject.SCIENCE, skillTag: "Reproduction", questionText: "Asexual?", interactionType: InteractionType.WORD_SELECT, options:[{id:'b', text:'Budding'},{id:'h', text:'Human'}], correctAnswer: "b", explanation: "Hydra." },
    { id: 8023, subject: Subject.SCIENCE, skillTag: "Adolescence", questionText: "Hormone?", interactionType: InteractionType.INPUT, correctAnswer: "Insulin", explanation: "Example." },
    { id: 8024, subject: Subject.SCIENCE, skillTag: "Force", questionText: "Push is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Contact'},{id:'n', text:'Non'}], correctAnswer: "c", explanation: "Touch." },
    { id: 8025, subject: Subject.SCIENCE, skillTag: "Friction", questionText: "Rough surface...", interactionType: InteractionType.WORD_SELECT, options:[{id:'i', text:'Increases'},{id:'d', text:'Decreases'}], correctAnswer: "i", explanation: "Grip." },
    { id: 8026, subject: Subject.SCIENCE, skillTag: "Sound", questionText: "Vibration makes...", interactionType: InteractionType.INPUT, correctAnswer: "Sound", explanation: "Wave." },
    { id: 8027, subject: Subject.SCIENCE, skillTag: "Electricity", questionText: "LED?", interactionType: InteractionType.BINARY, options:[{id:'y', text:'Diode'},{id:'n', text:'Bulb'}], correctAnswer: "y", explanation: "Light Emitting Diode." },

    // --- ENGLISH (13) ---
    { id: 8028, subject: Subject.ENGLISH, skillTag: "Tense", questionText: "Past Perfect", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'Had gone'},{id:'w', text:'Went'}], correctAnswer: "h", explanation: "Had + V3." },
    { id: 8029, subject: Subject.ENGLISH, skillTag: "Voice", questionText: "Passive", interactionType: InteractionType.REORDER, options:[], correctAnswer: ["Tea", "was", "made"], explanation: "Obj first." },
    { id: 8030, subject: Subject.ENGLISH, skillTag: "Speech", questionText: "Indirect", interactionType: InteractionType.WORD_SELECT, options:[{id:'t', text:'Told'},{id:'s', text:'Said'}], correctAnswer: "t", explanation: "Change." },
    { id: 8031, subject: Subject.ENGLISH, skillTag: "Modals", questionText: "Ability?", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Can'},{id:'m', text:'May'}], correctAnswer: "c", explanation: "Skill." },
    { id: 8032, subject: Subject.ENGLISH, skillTag: "Conditionals", questionText: "If it rains...", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Will stay'},{id:'s', text:'Stayed'}], correctAnswer: "w", explanation: "Type 1." },
    { id: 8033, subject: Subject.ENGLISH, skillTag: "Vocab", questionText: "Antonym of Ancient", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Modern'},{id:'o', text:'Old'}], correctAnswer: "m", explanation: "New." },
    { id: 8034, subject: Subject.ENGLISH, skillTag: "Idiom", questionText: "Piece of cake", interactionType: InteractionType.WORD_SELECT, options:[{id:'e', text:'Easy'},{id:'f', text:'Food'}], correctAnswer: "e", explanation: "Simple." },
    { id: 8035, subject: Subject.ENGLISH, skillTag: "Spelling", questionText: "Accommodate", interactionType: InteractionType.WORD_SELECT, options:[{id:'r', text:'Accommodate'},{id:'w', text:'Accomodate'}], correctAnswer: "r", explanation: "Double m." },
    { id: 8036, subject: Subject.ENGLISH, skillTag: "Determiners", questionText: "___ book.", interactionType: InteractionType.WORD_SELECT, options:[{id:'t', text:'This'},{id:'m', text:'Many'}], correctAnswer: "t", explanation: "Singular." },
    { id: 8037, subject: Subject.ENGLISH, skillTag: "Clauses", questionText: "Adjective clause?", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Who...'},{id:'b', text:'Because...'}], correctAnswer: "w", explanation: "Describes noun." },
    { id: 8038, subject: Subject.ENGLISH, skillTag: "Agreement", questionText: "News ___ good.", interactionType: InteractionType.WORD_SELECT, options:[{id:'i', text:'Is'},{id:'a', text:'Are'}], correctAnswer: "i", explanation: "Singular." },
    { id: 8039, subject: Subject.ENGLISH, skillTag: "Prepositions", questionText: "Fond ___", interactionType: InteractionType.WORD_SELECT, options:[{id:'o', text:'Of'},{id:'i', text:'In'}], correctAnswer: "o", explanation: "Fixed." },
    { id: 8040, subject: Subject.ENGLISH, skillTag: "Literature", questionText: "Poem lines?", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Stanza'},{id:'p', text:'Para'}], correctAnswer: "s", explanation: "Verse." }
];
