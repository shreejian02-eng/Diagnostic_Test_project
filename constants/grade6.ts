import { Question, Subject, InteractionType } from '../types';

export const GRADE_6_QUESTIONS: Question[] = [
    // --- MATH (14) ---
    { id: 6001, subject: Subject.MATH, skillTag: "Ratios", questionText: "2:3, total 10. First part?", interactionType: InteractionType.INPUT, correctAnswer: "4", explanation: "2/5 of 10." },
    { id: 6002, subject: Subject.MATH, skillTag: "Fractions", questionText: "1/2 + 1/4", interactionType: InteractionType.MULTIPLE_CHOICE, options:[{id:'a', text:'3/4'},{id:'b', text:'2/6'}], correctAnswer: "a", explanation: "3/4." },
    { id: 6003, subject: Subject.MATH, skillTag: "Decimals", questionText: "0.5 x 10", interactionType: InteractionType.CALCULATOR, correctAnswer: "5", explanation: "Shift decimal." },
    { id: 6004, subject: Subject.MATH, skillTag: "Algebra", questionText: "x + 5 = 10", interactionType: InteractionType.INPUT, correctAnswer: "5", explanation: "x=5." },
    { id: 6005, subject: Subject.MATH, skillTag: "Geometry", questionText: "Area of rect 5x4", interactionType: InteractionType.CALCULATOR, correctAnswer: "20", explanation: "LxW." },
    { id: 6006, subject: Subject.MATH, skillTag: "Integers", questionText: "-5 + 3", interactionType: InteractionType.SLIDER, options:[{id:'min', text:'-10'},{id:'max', text:'10'}], correctAnswer: "-2", explanation: "Number line." },
    { id: 6007, subject: Subject.MATH, skillTag: "Factors", questionText: "Factors of 12", interactionType: InteractionType.SELECTION_GRID, options:[{id:'2', text:'2'},{id:'5', text:'5'}], correctAnswer: ["2"], explanation: "2x6." },
    { id: 6008, subject: Subject.MATH, skillTag: "LCM", questionText: "LCM of 2 and 3", interactionType: InteractionType.INPUT, correctAnswer: "6", explanation: "Multiples." },
    { id: 6009, subject: Subject.MATH, skillTag: "Perimeter", questionText: "Sq side 4. Perim?", interactionType: InteractionType.CALCULATOR, correctAnswer: "16", explanation: "4x4." },
    { id: 6010, subject: Subject.MATH, skillTag: "Angles", questionText: "Right angle is...", interactionType: InteractionType.SLIDER, options:[{id:'max', text:'180'}], correctAnswer: "90", explanation: "90 deg." },
    { id: 6011, subject: Subject.MATH, skillTag: "Data", questionText: "Mean of 2, 4, 6", interactionType: InteractionType.CALCULATOR, correctAnswer: "4", explanation: "Sum/3." },
    { id: 6012, subject: Subject.MATH, skillTag: "Place Value", questionText: "Value of 6 in 600", interactionType: InteractionType.INPUT, correctAnswer: "600", explanation: "Hundreds." },
    { id: 6013, subject: Subject.MATH, skillTag: "Symmetry", questionText: "Circle lines?", interactionType: InteractionType.WORD_SELECT, options:[{id:'i', text:'Infinite'},{id:'1', text:'1'}], correctAnswer: "i", explanation: "Many." },
    { id: 6014, subject: Subject.MATH, skillTag: "Roman", questionText: "V = ?", interactionType: InteractionType.INPUT, correctAnswer: "5", explanation: "Roman Num." },

    // --- SCIENCE (13) ---
    { id: 6015, subject: Subject.SCIENCE, skillTag: "Food", questionText: "Carbs give...", interactionType: InteractionType.WORD_SELECT, options:[{id:'e', text:'Energy'},{id:'g', text:'Growth'}], correctAnswer: "e", explanation: "Fuel." },
    { id: 6016, subject: Subject.SCIENCE, skillTag: "Plants", questionText: "Root type?", interactionType: InteractionType.WORD_SELECT, options:[{id:'t', text:'Tap'},{id:'f', text:'Fibrous'}], correctAnswer: "t", explanation: "Carrot." },
    { id: 6017, subject: Subject.SCIENCE, skillTag: "Separation", questionText: "Sand and Water", interactionType: InteractionType.WORD_SELECT, options:[{id:'f', text:'Filter'},{id:'e', text:'Evap'}], correctAnswer: "f", explanation: "Sediment." },
    { id: 6018, subject: Subject.SCIENCE, skillTag: "Change", questionText: "Ice melt", interactionType: InteractionType.BINARY, options:[{id:'p', text:'Physical'},{id:'c', text:'Chemical'}], correctAnswer: "p", explanation: "Reversible." },
    { id: 6019, subject: Subject.SCIENCE, skillTag: "Body", questionText: "Joint type?", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'Hinge'},{id:'b', text:'Ball'}], correctAnswer: "h", explanation: "Knee." },
    { id: 6020, subject: Subject.SCIENCE, skillTag: "Habitat", questionText: "Cactus lives in...", interactionType: InteractionType.WORD_SELECT, options:[{id:'d', text:'Desert'},{id:'w', text:'Water'}], correctAnswer: "d", explanation: "Dry." },
    { id: 6021, subject: Subject.SCIENCE, skillTag: "Motion", questionText: "Rectilinear is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Straight'},{id:'c', text:'Curved'}], correctAnswer: "s", explanation: "Line." },
    { id: 6022, subject: Subject.SCIENCE, skillTag: "Light", questionText: "Mirror does...", interactionType: InteractionType.WORD_SELECT, options:[{id:'r', text:'Reflect'},{id:'a', text:'Absorb'}], correctAnswer: "r", explanation: "Bounce." },
    { id: 6023, subject: Subject.SCIENCE, skillTag: "Electricity", questionText: "Conductor?", interactionType: InteractionType.SELECTION_GRID, options:[{id:'c', text:'Copper'},{id:'w', text:'Wood'}], correctAnswer: ["c"], explanation: "Metal." },
    { id: 6024, subject: Subject.SCIENCE, skillTag: "Magnets", questionText: "Poles?", interactionType: InteractionType.INPUT, correctAnswer: "2", explanation: "N and S." },
    { id: 6025, subject: Subject.SCIENCE, skillTag: "Water", questionText: "Save water?", interactionType: InteractionType.BINARY, options:[{id:'y', text:'Yes'},{id:'n', text:'No'}], correctAnswer: "y", explanation: "Precious." },
    { id: 6026, subject: Subject.SCIENCE, skillTag: "Air", questionText: "Air is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Mixture'},{id:'p', text:'Pure'}], correctAnswer: "m", explanation: "Gases." },
    { id: 6027, subject: Subject.SCIENCE, skillTag: "Waste", questionText: "Compost is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'g', text:'Good'},{id:'b', text:'Bad'}], correctAnswer: "g", explanation: "Recycle." },

    // --- ENGLISH (13) ---
    { id: 6028, subject: Subject.ENGLISH, skillTag: "Sentence", questionText: "Identify Subj: 'He runs.'", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'He'},{id:'r', text:'Runs'}], correctAnswer: "h", explanation: "Actor." },
    { id: 6029, subject: Subject.ENGLISH, skillTag: "Nouns", questionText: "Abstract?", interactionType: InteractionType.WORD_SELECT, options:[{id:'l', text:'Love'},{id:'t', text:'Table'}], correctAnswer: "l", explanation: "Feeling." },
    { id: 6030, subject: Subject.ENGLISH, skillTag: "Pronouns", questionText: "Reflexive?", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Myself'},{id:'i', text:'I'}], correctAnswer: "m", explanation: "Self." },
    { id: 6031, subject: Subject.ENGLISH, skillTag: "Adjectives", questionText: "Degree?", interactionType: InteractionType.WORD_SELECT, options:[{id:'b', text:'Best'},{id:'g', text:'Good'}], correctAnswer: "b", explanation: "Superlative." },
    { id: 6032, subject: Subject.ENGLISH, skillTag: "Tense", questionText: "Future?", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Will go'},{id:'g', text:'Went'}], correctAnswer: "w", explanation: "Will." },
    { id: 6033, subject: Subject.ENGLISH, skillTag: "Articles", questionText: "___ MP.", interactionType: InteractionType.WORD_SELECT, options:[{id:'a', text:'An'},{id:'t', text:'A'}], correctAnswer: "a", explanation: "Sound 'Em'." },
    { id: 6034, subject: Subject.ENGLISH, skillTag: "Voice", questionText: "Active?", interactionType: InteractionType.BINARY, options:[{id:'a', text:'I ate'},{id:'p', text:'Eaten by'}], correctAnswer: "a", explanation: "Doer first." },
    { id: 6035, subject: Subject.ENGLISH, skillTag: "Vocab", questionText: "Synonym of Big.", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'Huge'},{id:'s', text:'Small'}], correctAnswer: "h", explanation: "Same." },
    { id: 6036, subject: Subject.ENGLISH, skillTag: "Spelling", questionText: "Correct?", interactionType: InteractionType.WORD_SELECT, options:[{id:'r', text:'Receive'},{id:'w', text:'Recieve'}], correctAnswer: "r", explanation: "EI." },
    { id: 6037, subject: Subject.ENGLISH, skillTag: "Punctuation", questionText: "List items.", interactionType: InteractionType.SELECTION_GRID, options:[{id:'c', text:','},{id:'d', text:'.'}], correctAnswer: ["c"], explanation: "Comma." },
    { id: 6038, subject: Subject.ENGLISH, skillTag: "Preposition", questionText: "Jump ___ pool.", interactionType: InteractionType.WORD_SELECT, options:[{id:'i', text:'Into'},{id:'o', text:'On'}], correctAnswer: "i", explanation: "Motion." },
    { id: 6039, subject: Subject.ENGLISH, skillTag: "Conjunction", questionText: "Reason?", interactionType: InteractionType.WORD_SELECT, options:[{id:'b', text:'Because'},{id:'a', text:'And'}], correctAnswer: "b", explanation: "Why." },
    { id: 6040, subject: Subject.ENGLISH, skillTag: "Interjection", questionText: "Wow!", interactionType: InteractionType.INPUT, correctAnswer: "Wow", explanation: "Emotion." }
];
