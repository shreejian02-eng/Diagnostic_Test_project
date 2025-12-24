import { Question, Subject, InteractionType } from '../types';

export const GRADE_11_QUESTIONS: Question[] = [
    // --- MATH (14) ---
    { id: 11001, subject: Subject.MATH, skillTag: "Sets", questionText: "Null set symbol", interactionType: InteractionType.WORD_SELECT, options:[{id:'p', text:'Phi'},{id:'0', text:'0'}], correctAnswer: "p", explanation: "Empty." },
    { id: 11002, subject: Subject.MATH, skillTag: "Relations", questionText: "Function test", interactionType: InteractionType.WORD_SELECT, options:[{id:'v', text:'Vertical'},{id:'h', text:'Horizontal'}], correctAnswer: "v", explanation: "Line." },
    { id: 11003, subject: Subject.MATH, skillTag: "Trig", questionText: "Sin^2 + Cos^2", interactionType: InteractionType.CALCULATOR, correctAnswer: "1", explanation: "Ident." },
    { id: 11004, subject: Subject.MATH, skillTag: "Induction", questionText: "Step 1", interactionType: InteractionType.INPUT, correctAnswer: "n=1", explanation: "Base." },
    { id: 11005, subject: Subject.MATH, skillTag: "Complex", questionText: "i^2", interactionType: InteractionType.CALCULATOR, correctAnswer: "-1", explanation: "Imag." },
    { id: 11006, subject: Subject.MATH, skillTag: "Inequalities", questionText: "x > 2", interactionType: InteractionType.WORD_SELECT, options:[{id:'o', text:'Open'},{id:'c', text:'Closed'}], correctAnswer: "o", explanation: "Strict." },
    { id: 11007, subject: Subject.MATH, skillTag: "Permutation", questionText: "Order matters?", interactionType: InteractionType.BINARY, options:[{id:'y', text:'Yes'},{id:'n', text:'No'}], correctAnswer: "y", explanation: "Arrangement." },
    { id: 11008, subject: Subject.MATH, skillTag: "Binomial", questionText: "Pascal Tri", interactionType: InteractionType.WORD_SELECT, options:[{id:'c', text:'Coeffs'},{id:'p', text:'Powers'}], correctAnswer: "c", explanation: "Numbers." },
    { id: 11009, subject: Subject.MATH, skillTag: "Sequence", questionText: "AP diff", interactionType: InteractionType.INPUT, correctAnswer: "d", explanation: "Common." },
    { id: 11010, subject: Subject.MATH, skillTag: "Lines", questionText: "Slope m", interactionType: InteractionType.WORD_SELECT, options:[{id:'t', text:'tanO'},{id:'s', text:'sinO'}], correctAnswer: "t", explanation: "Rise/Run." },
    { id: 11011, subject: Subject.MATH, skillTag: "Conics", questionText: "Circle eq", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'x2+y2=r2'},{id:'p', text:'y2=4ax'}], correctAnswer: "s", explanation: "Std." },
    { id: 11012, subject: Subject.MATH, skillTag: "3D", questionText: "Octants", interactionType: InteractionType.CALCULATOR, correctAnswer: "8", explanation: "3 planes." },
    { id: 11013, subject: Subject.MATH, skillTag: "Limits", questionText: "lim x->0 sinx/x", interactionType: InteractionType.CALCULATOR, correctAnswer: "1", explanation: "Std." },
    { id: 11014, subject: Subject.MATH, skillTag: "Stats", questionText: "Variance is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'SD^2'},{id:'m', text:'Mean'}], correctAnswer: "s", explanation: "Spread." },

    // --- SCIENCE (13) ---
    { id: 11015, subject: Subject.SCIENCE, skillTag: "Units", questionText: "SI Mass", interactionType: InteractionType.INPUT, correctAnswer: "kg", explanation: "Kilo." },
    { id: 11016, subject: Subject.SCIENCE, skillTag: "Motion", questionText: "Velocity is...", interactionType: InteractionType.WORD_SELECT, options:[{id:'v', text:'Vector'},{id:'s', text:'Scalar'}], correctAnswer: "v", explanation: "Dir." },
    { id: 11017, subject: Subject.SCIENCE, skillTag: "Laws", questionText: "F=ma", interactionType: InteractionType.WORD_SELECT, options:[{id:'2', text:'2nd'},{id:'1', text:'1st'}], correctAnswer: "2", explanation: "Newton." },
    { id: 11018, subject: Subject.SCIENCE, skillTag: "Anatomy", questionText: "Identify the Cerebellum.", 
      interactionType: InteractionType.LOCATOR,
      backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Human_brain_midsagittal_plane_diagram.svg/640px-Human_brain_midsagittal_plane_diagram.svg.png",
      options:[
          {id:'cer', text:'Cerebellum: Balance & Coordination', hotspot: {x: 65, y: 65, w: 15, h: 15}},
          {id:'pon', text:'Pons: Relay signals', hotspot: {x: 50, y: 60, w: 10, h: 10}}
      ],
      correctAnswer: "cer", 
      explanation: "The cerebellum is located at the back of the brain." 
    },
    { id: 11019, subject: Subject.SCIENCE, skillTag: "Rotation", questionText: "Torque", interactionType: InteractionType.WORD_SELECT, options:[{id:'t', text:'Turn'},{id:'p', text:'Push'}], correctAnswer: "t", explanation: "Spin." },
    { id: 11020, subject: Subject.SCIENCE, skillTag: "Grav", questionText: "Escape Vel", interactionType: InteractionType.WORD_SELECT, options:[{id:'1', text:'11.2'},{id:'9', text:'9.8'}], correctAnswer: "1", explanation: "km/s." },
    { id: 11021, subject: Subject.SCIENCE, skillTag: "Solids", questionText: "Elasticity", interactionType: InteractionType.WORD_SELECT, options:[{id:'h', text:'Hooke'},{id:'b', text:'Boyle'}], correctAnswer: "h", explanation: "Spring." },
    { id: 11022, subject: Subject.SCIENCE, skillTag: "Fluids", questionText: "Pascal Law", interactionType: InteractionType.WORD_SELECT, options:[{id:'p', text:'Pressure'},{id:'t', text:'Temp'}], correctAnswer: "p", explanation: "Hydraulic." },
    { id: 11023, subject: Subject.SCIENCE, skillTag: "Thermal", questionText: "Cp vs Cv", interactionType: InteractionType.WORD_SELECT, options:[{id:'g', text:'Cp>Cv'},{id:'l', text:'Cp<Cv'}], correctAnswer: "g", explanation: "Gas." },
    { id: 11024, subject: Subject.SCIENCE, skillTag: "Thermo", questionText: "Entropy", interactionType: InteractionType.WORD_SELECT, options:[{id:'d', text:'Disorder'},{id:'o', text:'Order'}], correctAnswer: "d", explanation: "Chaos." },
    { id: 11025, subject: Subject.SCIENCE, skillTag: "Gases", questionText: "PV=nRT", interactionType: InteractionType.WORD_SELECT, options:[{id:'i', text:'Ideal'},{id:'r', text:'Real'}], correctAnswer: "i", explanation: "Law." },
    { id: 11026, subject: Subject.SCIENCE, skillTag: "Waves", questionText: "Doppler", interactionType: InteractionType.WORD_SELECT, options:[{id:'f', text:'Freq'},{id:'a', text:'Amp'}], correctAnswer: "f", explanation: "Shift." },
    { id: 11027, subject: Subject.SCIENCE, skillTag: "Oscill", questionText: "SHM", interactionType: InteractionType.WORD_SELECT, options:[{id:'s', text:'Sine'},{id:'l', text:'Line'}], correctAnswer: "s", explanation: "Wave." },

    // --- ENGLISH (13) ---
    { id: 11028, subject: Subject.ENGLISH, skillTag: "Comp", questionText: "Note Making", interactionType: InteractionType.WORD_SELECT, options:[{id:'b', text:'Brief'},{id:'l', text:'Long'}], correctAnswer: "b", explanation: "Summary." },
    { id: 11029, subject: Subject.ENGLISH, skillTag: "Determiner", questionText: "___ Union", interactionType: InteractionType.WORD_SELECT, options:[{id:'a', text:'A'},{id:'n', text:'An'}], correctAnswer: "a", explanation: "Sound Y." },
    { id: 11030, subject: Subject.ENGLISH, skillTag: "Tense", questionText: "Since...", interactionType: InteractionType.WORD_SELECT, options:[{id:'p', text:'Perfect'},{id:'c', text:'Cont'}], correctAnswer: "p", explanation: "Time." },
    { id: 11031, subject: Subject.ENGLISH, skillTag: "Clause", questionText: "Noun Clause", interactionType: InteractionType.WORD_SELECT, options:[{id:'w', text:'What...'},{id:'t', text:'That...'}], correctAnswer: "w", explanation: "Obj." },
    { id: 11032, subject: Subject.ENGLISH, skillTag: "Voice", questionText: "Be + V3", interactionType: InteractionType.INPUT, correctAnswer: "Passive", explanation: "Form." },
    { id: 11033, subject: Subject.ENGLISH, skillTag: "Modal", questionText: "Possibility", interactionType: InteractionType.WORD_SELECT, options:[{id:'m', text:'May'},{id:'w', text:'Will'}], correctAnswer: "m", explanation: "Chance." },
    { id: 11034, subject: Subject.ENGLISH, skillTag: "Speech", questionText: "Direct", interactionType: InteractionType.WORD_SELECT, options:[{id:'q', text:'Quotes'},{id:'n', text:'None'}], correctAnswer: "q", explanation: "Marks." },
    { id: 11035, subject: Subject.ENGLISH, skillTag: "Vocab", questionText: "Benevolent", interactionType: InteractionType.WORD_SELECT, options:[{id:'k', text:'Kind'},{id:'c', text:'Cruel'}], correctAnswer: "k", explanation: "Good." },
    { id: 11036, subject: Subject.ENGLISH, skillTag: "Order", questionText: "S V O", interactionType: InteractionType.BINARY, options:[{id:'y', text:'Yes'},{id:'n', text:'No'}], correctAnswer: "y", explanation: "Std." },
    { id: 11037, subject: Subject.ENGLISH, skillTag: "Device", questionText: "Oxymoron", interactionType: InteractionType.WORD_SELECT, options:[{id:'o', text:'Opposite'},{id:'s', text:'Same'}], correctAnswer: "o", explanation: "Clash." },
    { id: 11038, subject: Subject.ENGLISH, skillTag: "Writing", questionText: "Report", interactionType: InteractionType.WORD_SELECT, options:[{id:'f', text:'Formal'},{id:'i', text:'Informal'}], correctAnswer: "f", explanation: "Style." },
    { id: 11039, subject: Subject.ENGLISH, skillTag: "Reading", questionText: "Skimming", interactionType: InteractionType.WORD_SELECT, options:[{id:'f', text:'Fast'},{id:'s', text:'Slow'}], correctAnswer: "f", explanation: "Gist." },
    { id: 11040, subject: Subject.ENGLISH, skillTag: "Lit", questionText: "Irony", interactionType: InteractionType.WORD_SELECT, options:[{id:'u', text:'Unexpected'},{id:'e', text:'Expected'}], correctAnswer: "u", explanation: "Twist." }
];