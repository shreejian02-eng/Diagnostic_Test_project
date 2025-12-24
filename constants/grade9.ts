import { Question, Subject, InteractionType } from '../types';

export const GRADE_9_QUESTIONS: Question[] = [
    // --- MATH (14) ---
    { id: 9001, subject: Subject.MATH, skillTag: "Num Sys", questionText: "Rational between 1 & 2", interactionType: InteractionType.INPUT, correctAnswer: "1.5", explanation: "Midpoint." },
    { id: 9002, subject: Subject.MATH, skillTag: "Polynomials", questionText: "Degree of x^2 + x", interactionType: InteractionType.INPUT, correctAnswer: "2", explanation: "Max power." },
    { id: 9003, subject: Subject.MATH, skillTag: "Coords", questionText: "X-axis eq?", interactionType: InteractionType.WORD_SELECT, options:[{id:'y', text:'y=0'},{id:'x', text:'x=0'}], correctAnswer: "y", explanation: "Height 0." },
    { id: 9004, subject: Subject.MATH, skillTag: "Linear Eq", questionText: "Sol of x+y=2", interactionType: InteractionType.WORD_SELECT, options:[{id:'1', text:'1,1'},{id:'2', text:'2,2'}], correctAnswer: "1", explanation: "Sum." },
    { id: 9005, subject: Subject.MATH, skillTag: "Euclid", questionText: "Point has...", interactionType: InteractionType.WORD_SELECT, options:[{id:'0', text:'0 dim'},{id:'1', text:'1 dim'}], correctAnswer: "0", explanation: "No size." },
    { id: 9006, subject: Subject.MATH, skillTag: "Lines", questionText: "Supp of 80", interactionType: InteractionType.CALCULATOR, correctAnswer: "100", explanation: "180-80." },
    { id: 9007, subject: Subject.MATH, skillTag: "Triangles", questionText: "Sum of angles", interactionType: InteractionType.CALCULATOR, correctAnswer: "180", explanation: "Internal." },
    { id: 9008, subject: Subject.MATH, skillTag: "Quads", questionText: "Rect angles?", interactionType: InteractionType.CALCULATOR, correctAnswer: "90", explanation: "Right." },
    { id: 9009, subject: Subject.MATH, skillTag: "Circles", questionText: "Longest chord", interactionType: InteractionType.INPUT, correctAnswer: "Diameter", explanation: "Center." },
    { id: 9010, subject: Subject.MATH, skillTag: "Heron", questionText: "S in formula?", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Semi-perim'},{id:'p', text:'Perim'}], correctAnswer: "s", explanation: "Half." },
    { id: 9011, subject: Subject.MATH, skillTag: "Surface Area", questionText: "Cube side 3. Area?", interactionType: InteractionType.CALCULATOR, correctAnswer: "54", explanation: "6x9." },
    { id: 9012, subject: Subject.MATH, skillTag: "Stats", questionText: "Mode of 1,2,2", interactionType: InteractionType.INPUT, correctAnswer: "2", explanation: "Freq." },
    { id: 9013, subject: Subject.MATH, skillTag: "Prob", questionText: "Coin toss H?", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'0.5'},{id:'1', text:'1'}], correctAnswer: "h", explanation: "Half." },
    { id: 9014, subject: Subject.MATH, skillTag: "Construct", questionText: "Bisector cuts in...", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'Half'},{id:'t', text:'Third'}], correctAnswer: "h", explanation: "Equal." },

    // --- SCIENCE (13) ---
    { id: 9015, subject: Subject.SCIENCE, skillTag: "Matter", questionText: "Solid -> Gas", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Sublimation'},{id:'m', text:'Melt'}], correctAnswer: "s", explanation: "Direct." },
    { id: 9016, subject: Subject.SCIENCE, skillTag: "Pure", questionText: "Milk is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Colloid'},{id:'s', text:'Solution'}], correctAnswer: "c", explanation: "Mix." },
    { id: 9017, subject: Subject.SCIENCE, skillTag: "Atoms", questionText: "O atomic mass?", interactionType: InteractionType.CALCULATOR, correctAnswer: "16", explanation: "Std." },
    { id: 9018, subject: Subject.SCIENCE, skillTag: "Structure", questionText: "Electron charge", interactionType: InteractionType.WORD_SELECT, options:[{id:'n', text:'Neg'},{id:'p', text:'Pos'}], correctAnswer: "n", explanation: "-ve." },
    { id: 9019, subject: Subject.SCIENCE, skillTag: "Cell", questionText: "Brain of cell", interactionType: InteractionType.WORD_SELECT, options:[{id:'n', text:'Nucleus'},{id:'m', text:'Mito'}], correctAnswer: "n", explanation: "Control." },
    { id: 9020, subject: Subject.SCIENCE, skillTag: "Tissues", questionText: "Blood is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Connective'},{id:'m', text:'Muscle'}], correctAnswer: "c", explanation: "Link." },
    { id: 9021, subject: Subject.SCIENCE, skillTag: "Diversity", questionText: "Mammal?", interactionType: InteractionType.SELECTION_GRID, options:[{id:'w', text:'Whale'},{id:'f', text:'Fish'}], correctAnswer: ["w"], explanation: "Warm." },
    { id: 9022, subject: Subject.SCIENCE, skillTag: "Motion", questionText: "Dist / Time", interactionType: InteractionType.INPUT, correctAnswer: "Speed", explanation: "Rate." },
    { id: 9023, subject: Subject.SCIENCE, skillTag: "Force", questionText: "Unit?", interactionType: InteractionType.WORD_SELECT, options:[{id:'n', text:'Newton'},{id:'j', text:'Joule'}], correctAnswer: "n", explanation: "N." },
    { id: 9024, subject: Subject.SCIENCE, skillTag: "Gravity", questionText: "g on Earth", interactionType: InteractionType.CALCULATOR, correctAnswer: "9.8", explanation: "Accel." },
    { id: 9025, subject: Subject.SCIENCE, skillTag: "Work", questionText: "Power is rate of...", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Work'},{id:'f', text:'Force'}], correctAnswer: "w", explanation: "W/t." },
    { id: 9026, subject: Subject.SCIENCE, skillTag: "Sound", questionText: "Requires...", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Medium'},{id:'v', text:'Vacuum'}], correctAnswer: "m", explanation: "Travel." },
    { id: 9027, subject: Subject.SCIENCE, skillTag: "Illness", questionText: "Virus?", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Cold'},{id:'f', text:'Fracture'}], correctAnswer: "c", explanation: "Bug." },

    // --- ENGLISH (13) ---
    { id: 9028, subject: Subject.ENGLISH, skillTag: "Tense", questionText: "Simple Pres", interactionType: InteractionType.WORD_SELECT, options:[{id:'e', text:'Eats'},{id:'a', text:'Ate'}], correctAnswer: "e", explanation: "Habit." },
    { id: 9029, subject: Subject.ENGLISH, skillTag: "Voice", questionText: "Passive", interactionType: InteractionType.REORDER, options:[], correctAnswer: ["Song", "is", "sung"], explanation: "Be + V3." },
    { id: 9030, subject: Subject.ENGLISH, skillTag: "Determiner", questionText: "___ water.", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Some'},{id:'m', text:'Many'}], correctAnswer: "s", explanation: "Uncountable." },
    { id: 9031, subject: Subject.ENGLISH, skillTag: "Modals", questionText: "Duty?", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Should'},{id:'m', text:'Might'}], correctAnswer: "s", explanation: "Advice." },
    { id: 9032, subject: Subject.ENGLISH, skillTag: "Preposition", questionText: "Sit ___ chair.", interactionType: InteractionType.WORD_SELECT, options:[{id:'o', text:'On'},{id:'i', text:'In'}], correctAnswer: "o", explanation: "Surface." },
    { id: 9033, subject: Subject.ENGLISH, skillTag: "Connector", questionText: "Hard ___ failed.", interactionType: InteractionType.WORD_SELECT, options:[{id:'b', text:'But'},{id:'s', text:'So'}], correctAnswer: "b", explanation: "Contrast." },
    { id: 9034, subject: Subject.ENGLISH, skillTag: "Reported", questionText: "Said that...", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'He was'},{id:'i', text:'I am'}], correctAnswer: "h", explanation: "Past." },
    { id: 9035, subject: Subject.ENGLISH, skillTag: "SubjectVerb", questionText: "Everyone ___", interactionType: InteractionType.WORD_SELECT, options:[{id:'k', text:'Knows'},{id:'n', text:'Know'}], correctAnswer: "k", explanation: "Singular." },
    { id: 9036, subject: Subject.ENGLISH, skillTag: "Clause", questionText: "If clause", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Will'},{id:'h', text:'Had'}], correctAnswer: "w", explanation: "Cond." },
    { id: 9037, subject: Subject.ENGLISH, skillTag: "Vocab", questionText: "Synonym: Begin", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Start'},{id:'e', text:'End'}], correctAnswer: "s", explanation: "Start." },
    { id: 9038, subject: Subject.ENGLISH, skillTag: "Poetic", questionText: "Simile", interactionType: InteractionType.WORD_SELECT, options:[{id:'l', text:'Like'},{id:'i', text:'Is'}], correctAnswer: "l", explanation: "Compare." },
    { id: 9039, subject: Subject.ENGLISH, skillTag: "Drama", questionText: "Aside is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Speech'},{id:'a', text:'Act'}], correctAnswer: "s", explanation: "Solo." },
    { id: 9040, subject: Subject.ENGLISH, skillTag: "Writing", questionText: "Formal Letter", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Sir'},{id:'h', text:'Hi'}], correctAnswer: "s", explanation: "Respect." }
];
