import { Question, Subject, InteractionType } from '../types';

export const GRADE_10_QUESTIONS: Question[] = [
    // --- MATH (14) ---
    { id: 10001, subject: Subject.MATH, skillTag: "Real Num", questionText: "HCF 13, 26", interactionType: InteractionType.INPUT, correctAnswer: "13", explanation: "Factor." },
    { id: 10002, subject: Subject.MATH, skillTag: "Poly", questionText: "Zeros of x^2-4", interactionType: InteractionType.SELECTION_GRID, options:[{id:'2', text:'2'},{id:'-2', text:'-2'}], correctAnswer: ["2","-2"], explanation: "Roots." },
    { id: 10003, subject: Subject.MATH, skillTag: "Linear", questionText: "Lines intersect?", interactionType: InteractionType.BINARY, options:[{id:'y', text:'1 Sol'},{id:'n', text:'No Sol'}], correctAnswer: "y", explanation: "Cross." },
    { id: 10004, subject: Subject.MATH, skillTag: "Quadratics", questionText: "D = b^2 - ...", interactionType: InteractionType.INPUT, correctAnswer: "4ac", explanation: "Discrim." },
    { id: 10005, subject: Subject.MATH, skillTag: "AP", questionText: "nth term", interactionType: InteractionType.WORD_SELECT, options:[{id:'a', text:'a+(n-1)d'},{id:'s', text:'Sn'}], correctAnswer: "a", explanation: "Formula." },
    { id: 10006, subject: Subject.MATH, skillTag: "Triangles", questionText: "BPT is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'t', text:'Thales'},{id:'p', text:'Pyth'}], correctAnswer: "t", explanation: "Prop." },
    { id: 10007, subject: Subject.MATH, skillTag: "Coords", questionText: "Dist from Origin", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Sqrt(x2+y2)'},{id:'x', text:'x+y'}], correctAnswer: "s", explanation: "Pyth." },
    { id: 10008, subject: Subject.MATH, skillTag: "Trig", questionText: "Sin 30", interactionType: InteractionType.CALCULATOR, correctAnswer: "0.5", explanation: "Half." },
    { id: 10009, subject: Subject.MATH, skillTag: "Applications", questionText: "Elevation angle", interactionType: InteractionType.WORD_SELECT, options:[{id:'u', text:'Up'},{id:'d', text:'Down'}], correctAnswer: "u", explanation: "Look up." },
    { id: 10010, subject: Subject.MATH, skillTag: "Circles", questionText: "Tangent touches...", interactionType: InteractionType.INPUT, correctAnswer: "1 point", explanation: "Single." },
    { id: 10011, subject: Subject.MATH, skillTag: "Construct", questionText: "Scale factor", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Similar'},{id:'c', text:'Cong'}], correctAnswer: "s", explanation: "Size." },
    { id: 10012, subject: Subject.MATH, skillTag: "Areas", questionText: "Circle Area", interactionType: InteractionType.INPUT, correctAnswer: "pi r^2", explanation: "Formula." },
    { id: 10013, subject: Subject.MATH, skillTag: "Surface", questionText: "Vol Cone", interactionType: InteractionType.WORD_SELECT, options:[{id:'3', text:'1/3 pi r2 h'},{id:'1', text:'pi r2 h'}], correctAnswer: "3", explanation: "Third." },
    { id: 10014, subject: Subject.MATH, skillTag: "Stats", questionText: "Median is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Middle'},{id:'a', text:'Avg'}], correctAnswer: "m", explanation: "Center." },

    // --- SCIENCE (13) ---
    { id: 10015, subject: Subject.SCIENCE, skillTag: "Reactions", questionText: "Rusting is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'o', text:'Oxidation'},{id:'r', text:'Reduction'}], correctAnswer: "o", explanation: "O2 add." },
    { id: 10016, subject: Subject.SCIENCE, skillTag: "Acids", questionText: "pH < 7", interactionType: InteractionType.WORD_SELECT, options:[{id:'a', text:'Acid'},{id:'b', text:'Base'}], correctAnswer: "a", explanation: "Low." },
    { id: 10017, subject: Subject.SCIENCE, skillTag: "Metals", questionText: "Non-metal conductor", interactionType: InteractionType.INPUT, correctAnswer: "Graphite", explanation: "Carbon." },
    { id: 10018, subject: Subject.SCIENCE, skillTag: "Carbon", questionText: "Bond type", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Covalent'},{id:'i', text:'Ionic'}], correctAnswer: "c", explanation: "Share." },
    { id: 10019, subject: Subject.SCIENCE, skillTag: "Periodic", questionText: "Rows are...", interactionType: InteractionType.WORD_SELECT, options:[{id:'p', text:'Periods'},{id:'g', text:'Groups'}], correctAnswer: "p", explanation: "Horiz." },
    { id: 10020, subject: Subject.SCIENCE, skillTag: "Life", questionText: "Aerobic needs...", interactionType: InteractionType.INPUT, correctAnswer: "Oxygen", explanation: "Air." },
    { id: 10021, subject: Subject.SCIENCE, skillTag: "Control", questionText: "Neuron gap", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Synapse'},{id:'a', text:'Axon'}], correctAnswer: "s", explanation: "Gap." },
    { id: 10022, subject: Subject.SCIENCE, skillTag: "Reproduction", questionText: "Flower male part", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Stamen'},{id:'p', text:'Pistil'}], correctAnswer: "s", explanation: "Pollen." },
    { id: 10023, subject: Subject.SCIENCE, skillTag: "Heredity", questionText: "Mendel used...", interactionType: InteractionType.WORD_SELECT, options:[{id:'p', text:'Peas'},{id:'b', text:'Beans'}], correctAnswer: "p", explanation: "Plants." },
    { id: 10024, subject: Subject.SCIENCE, skillTag: "Light", questionText: "Lens for Myopia", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Concave'},{id:'x', text:'Convex'}], correctAnswer: "c", explanation: "Diverge." },
    { id: 10025, subject: Subject.SCIENCE, skillTag: "Eye", questionText: "Image on...", interactionType: InteractionType.WORD_SELECT, options:[{id:'r', text:'Retina'},{id:'c', text:'Cornea'}], correctAnswer: "r", explanation: "Screen." },
    { id: 10026, subject: Subject.SCIENCE, skillTag: "Electricity", questionText: "Ohm's Law", interactionType: InteractionType.WORD_SELECT, options:[{id:'v', text:'V=IR'},{id:'p', text:'P=VI'}], correctAnswer: "v", explanation: "Resist." },
    { id: 10027, subject: Subject.SCIENCE, skillTag: "Magnetic", questionText: "Field lines...", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Closed'},{id:'o', text:'Open'}], correctAnswer: "c", explanation: "Loop." },

    // --- ENGLISH (13) ---
    { id: 10028, subject: Subject.ENGLISH, skillTag: "Letter", questionText: "Formal closing", interactionType: InteractionType.WORD_SELECT, options:[{id:'t', text:'Truly'},{id:'l', text:'Love'}], correctAnswer: "t", explanation: "Yours." },
    { id: 10029, subject: Subject.ENGLISH, skillTag: "Tense", questionText: "Present Perfect", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'Has done'},{id:'d', text:'Did'}], correctAnswer: "h", explanation: "Recent." },
    { id: 10030, subject: Subject.ENGLISH, skillTag: "Modals", questionText: "Obligation", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Must'},{id:'c', text:'Can'}], correctAnswer: "m", explanation: "Force." },
    { id: 10031, subject: Subject.ENGLISH, skillTag: "Passive", questionText: "Object focus", interactionType: InteractionType.BINARY, options:[{id:'y', text:'Yes'},{id:'n', text:'No'}], correctAnswer: "y", explanation: "Action." },
    { id: 10032, subject: Subject.ENGLISH, skillTag: "Clauses", questionText: "Relative", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Which'},{id:'t', text:'Then'}], correctAnswer: "w", explanation: "Link." },
    { id: 10033, subject: Subject.ENGLISH, skillTag: "Connectors", questionText: "However...", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Contrast'},{id:'a', text:'Add'}], correctAnswer: "c", explanation: "Opposite." },
    { id: 10034, subject: Subject.ENGLISH, skillTag: "Poetry", questionText: "Rhyme scheme", interactionType: InteractionType.INPUT, correctAnswer: "AABB", explanation: "Example." },
    { id: 10035, subject: Subject.ENGLISH, skillTag: "Devices", questionText: "Alliteration", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Same sound'},{id:'m', text:'Meaning'}], correctAnswer: "s", explanation: "Start." },
    { id: 10036, subject: Subject.ENGLISH, skillTag: "Reported", questionText: "Will ->", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Would'},{id:'c', text:'Could'}], correctAnswer: "w", explanation: "Past." },
    { id: 10037, subject: Subject.ENGLISH, skillTag: "Subject", questionText: "Plural verb", interactionType: InteractionType.WORD_SELECT, options:[{id:'a', text:'Are'},{id:'i', text:'Is'}], correctAnswer: "a", explanation: "Many." },
    { id: 10038, subject: Subject.ENGLISH, skillTag: "Preposition", questionText: "Agree ___", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'With'},{id:'o', text:'On'}], correctAnswer: "w", explanation: "Person." },
    { id: 10039, subject: Subject.ENGLISH, skillTag: "Vocab", questionText: "Fragile", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Weak'},{id:'s', text:'Strong'}], correctAnswer: "w", explanation: "Break." },
    { id: 10040, subject: Subject.ENGLISH, skillTag: "Reading", questionText: "Main idea", interactionType: InteractionType.WORD_SELECT, options:[{id:'t', text:'Theme'},{id:'d', text:'Detail'}], correctAnswer: "t", explanation: "Core." }
];
