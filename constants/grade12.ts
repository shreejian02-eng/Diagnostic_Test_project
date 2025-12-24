import { Question, Subject, InteractionType } from '../types';

export const GRADE_12_QUESTIONS: Question[] = [
    // --- MATH (14) ---
    { id: 12001, subject: Subject.MATH, skillTag: "Relations", questionText: "Reflexive", interactionType: InteractionType.WORD_SELECT, options:[{id:'a', text:'(a,a)'},{id:'b', text:'(a,b)'}], correctAnswer: "a", explanation: "Self." },
    { id: 12002, subject: Subject.MATH, skillTag: "Functions", questionText: "One-one", interactionType: InteractionType.WORD_SELECT, options:[{id:'i', text:'Injective'},{id:'s', text:'Surjective'}], correctAnswer: "i", explanation: "Unique." },
    { id: 12003, subject: Subject.MATH, skillTag: "Inverse Trig", questionText: "Range sin-1", interactionType: InteractionType.WORD_SELECT, options:[{id:'9', text:'-90,90'},{id:'1', text:'0,180'}], correctAnswer: "9", explanation: "Principal." },
    { id: 12004, subject: Subject.MATH, skillTag: "Matrices", questionText: "Identity", interactionType: InteractionType.INPUT, correctAnswer: "I", explanation: "Unit." },
    { id: 12005, subject: Subject.MATH, skillTag: "Determinants", questionText: "|AB|", interactionType: InteractionType.WORD_SELECT, options:[{id:'a', text:'|A||B|'},{id:'p', text:'|A|+|B|'}], correctAnswer: "a", explanation: "Prod." },
    { id: 12006, subject: Subject.MATH, skillTag: "Continuity", questionText: "Jump", interactionType: InteractionType.WORD_SELECT, options:[{id:'d', text:'Discont'},{id:'c', text:'Cont'}], correctAnswer: "d", explanation: "Break." },
    { id: 12007, subject: Subject.MATH, skillTag: "Diff", questionText: "d/dx sinx", interactionType: InteractionType.INPUT, correctAnswer: "cosx", explanation: "Trig." },
    { id: 12008, subject: Subject.MATH, skillTag: "AOD", questionText: "Slope=0", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Max/Min'},{id:'n', text:'None'}], correctAnswer: "m", explanation: "Extrema." },
    { id: 12009, subject: Subject.MATH, skillTag: "Integrals", questionText: "Reverse of...", interactionType: InteractionType.WORD_SELECT, options:[{id:'d', text:'Diff'},{id:'m', text:'Mult'}], correctAnswer: "d", explanation: "Anti." },
    { id: 12010, subject: Subject.MATH, skillTag: "AOI", questionText: "Area under curve", interactionType: InteractionType.WORD_SELECT, options:[{id:'i', text:'Integral'},{id:'d', text:'Deriv'}], correctAnswer: "i", explanation: "Sum." },
    { id: 12011, subject: Subject.MATH, skillTag: "Diff Eq", questionText: "Order", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'High Deriv'},{id:'p', text:'Power'}], correctAnswer: "h", explanation: "Level." },
    { id: 12012, subject: Subject.MATH, skillTag: "Vectors", questionText: "Dot Prod", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Scalar'},{id:'v', text:'Vector'}], correctAnswer: "s", explanation: "Number." },
    { id: 12013, subject: Subject.MATH, skillTag: "3D", questionText: "Direction Cos", interactionType: InteractionType.WORD_SELECT, options:[{id:'l', text:'l,m,n'},{id:'a', text:'a,b,c'}], correctAnswer: "l", explanation: "Unit." },
    { id: 12014, subject: Subject.MATH, skillTag: "Prob", questionText: "Bayes", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Cond'},{id:'s', text:'Simple'}], correctAnswer: "c", explanation: "Reverse." },

    // --- SCIENCE (13) ---
    { id: 12015, subject: Subject.SCIENCE, skillTag: "Electrostatics", questionText: "Coulomb Law", interactionType: InteractionType.WORD_SELECT, options:[{id:'q', text:'q1q2/r2'},{id:'r', text:'r'}], correctAnswer: "q", explanation: "Inv sq." },
    { id: 12016, subject: Subject.SCIENCE, skillTag: "Current", questionText: "Drift Vel", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Slow'},{id:'f', text:'Fast'}], correctAnswer: "s", explanation: "Avg." },
    { id: 12017, subject: Subject.SCIENCE, skillTag: "Magnetic", questionText: "Lorentz Force", interactionType: InteractionType.WORD_SELECT, options:[{id:'q', text:'q(vXB)'},{id:'f', text:'ma'}], correctAnswer: "q", explanation: "Field." },
    { id: 12018, subject: Subject.SCIENCE, skillTag: "EMI", questionText: "Lenz Law", interactionType: InteractionType.WORD_SELECT, options:[{id:'o', text:'Oppose'},{id:'a', text:'Aid'}], correctAnswer: "o", explanation: "Conserve." },
    { id: 12019, subject: Subject.SCIENCE, skillTag: "AC", questionText: "Impedance", interactionType: InteractionType.INPUT, correctAnswer: "Z", explanation: "Resist." },
    { id: 12020, subject: Subject.SCIENCE, skillTag: "EM Waves", questionText: "Speed", interactionType: InteractionType.INPUT, correctAnswer: "c", explanation: "Light." },
    { id: 12021, subject: Subject.SCIENCE, skillTag: "Optics", questionText: "TIR", interactionType: InteractionType.WORD_SELECT, options:[{id:'f', text:'Fiber'},{id:'m', text:'Mirror'}], correctAnswer: "f", explanation: "Internal." },
    { id: 12022, subject: Subject.SCIENCE, skillTag: "Wave Opt", questionText: "Interference", interactionType: InteractionType.WORD_SELECT, options:[{id:'y', text:'Youngs'},{id:'o', text:'Olds'}], correctAnswer: "y", explanation: "Slit." },
    { id: 12023, subject: Subject.SCIENCE, skillTag: "Dual Nature", questionText: "Photoelectric", interactionType: InteractionType.WORD_SELECT, options:[{id:'p', text:'Particle'},{id:'w', text:'Wave'}], correctAnswer: "p", explanation: "Photon." },
    { id: 12024, subject: Subject.SCIENCE, skillTag: "Atoms", questionText: "Bohr Model", interactionType: InteractionType.WORD_SELECT, options:[{id:'o', text:'Orbits'},{id:'c', text:'Cloud'}], correctAnswer: "o", explanation: "Fixed." },
    { id: 12025, subject: Subject.SCIENCE, skillTag: "Nuclei", questionText: "Fusion", interactionType: InteractionType.WORD_SELECT, options:[{id:'j', text:'Join'},{id:'s', text:'Split'}], correctAnswer: "j", explanation: "Sun." },
    { id: 12026, subject: Subject.SCIENCE, skillTag: "Semicon", questionText: "Doping", interactionType: InteractionType.WORD_SELECT, options:[{id:'i', text:'Impurity'},{id:'p', text:'Pure'}], correctAnswer: "i", explanation: "Mod." },
    { id: 12027, subject: Subject.SCIENCE, skillTag: "Comm", questionText: "Bandwidth", interactionType: InteractionType.WORD_SELECT, options:[{id:'r', text:'Range'},{id:'s', text:'Size'}], correctAnswer: "r", explanation: "Freq." },

    // --- ENGLISH (13) ---
    { id: 12028, subject: Subject.ENGLISH, skillTag: "Reading", questionText: "Comprehension", interactionType: InteractionType.WORD_SELECT, options:[{id:'u', text:'Understand'},{id:'r', text:'Read'}], correctAnswer: "u", explanation: "Grasp." },
    { id: 12029, subject: Subject.ENGLISH, skillTag: "Writing", questionText: "Article", interactionType: InteractionType.WORD_SELECT, options:[{id:'o', text:'Opinion'},{id:'f', text:'Fact'}], correctAnswer: "o", explanation: "View." },
    { id: 12030, subject: Subject.ENGLISH, skillTag: "Speech", questionText: "Debate", interactionType: InteractionType.WORD_SELECT, options:[{id:'a', text:'Argue'},{id:'t', text:'Talk'}], correctAnswer: "a", explanation: "Persuade." },
    { id: 12031, subject: Subject.ENGLISH, skillTag: "Lit", questionText: "Theme", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Central'},{id:'s', text:'Side'}], correctAnswer: "c", explanation: "Idea." },
    { id: 12032, subject: Subject.ENGLISH, skillTag: "Poetry", questionText: "Tone", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'Mood'},{id:'s', text:'Sound'}], correctAnswer: "m", explanation: "Feel." },
    { id: 12033, subject: Subject.ENGLISH, skillTag: "Novel", questionText: "Protagonist", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'Hero'},{id:'v', text:'Villain'}], correctAnswer: "h", explanation: "Main." },
    { id: 12034, subject: Subject.ENGLISH, skillTag: "Grammar", questionText: "Transformation", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Change'},{id:'k', text:'Keep'}], correctAnswer: "c", explanation: "Form." },
    { id: 12035, subject: Subject.ENGLISH, skillTag: "Vocab", questionText: "Ubiquitous", interactionType: InteractionType.WORD_SELECT, options:[{id:'e', text:'Everywhere'},{id:'r', text:'Rare'}], correctAnswer: "e", explanation: "Common." },
    { id: 12036, subject: Subject.ENGLISH, skillTag: "Idiom", questionText: "Break leg", interactionType: InteractionType.WORD_SELECT, options:[{id:'l', text:'Luck'},{id:'h', text:'Hurt'}], correctAnswer: "l", explanation: "Wish." },
    { id: 12037, subject: Subject.ENGLISH, skillTag: "Syntax", questionText: "Inversion", interactionType: InteractionType.WORD_SELECT, options:[{id:'v', text:'Verb 1st'},{id:'s', text:'Subj 1st'}], correctAnswer: "v", explanation: "Order." },
    { id: 12038, subject: Subject.ENGLISH, skillTag: "Style", questionText: "Verbose", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'Wordy'},{id:'b', text:'Brief'}], correctAnswer: "w", explanation: "Long." },
    { id: 12039, subject: Subject.ENGLISH, skillTag: "Format", questionText: "Notice", interactionType: InteractionType.WORD_SELECT, options:[{id:'b', text:'Box'},{id:'l', text:'Line'}], correctAnswer: "b", explanation: "Border." },
    { id: 12040, subject: Subject.ENGLISH, skillTag: "Closure", questionText: "Conclusion", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Sum up'},{id:'n', text:'New'}], correctAnswer: "s", explanation: "End." }
];
