import { Question, Subject, InteractionType } from '../types';

export const GRADE_7_QUESTIONS: Question[] = [
  // --- MATH (14 Questions) ---
  {
    id: 7001,
    subject: Subject.MATH,
    skillTag: "Integer Ordering",
    questionText: "Arrange these integers in Ascending Order (Smallest to Largest).",
    interactionType: InteractionType.REORDER,
    options: [
      { id: 'A', text: "0" },
      { id: 'B', text: "-5" },
      { id: 'C', text: "2" },
      { id: 'D', text: "-1" }
    ],
    correctAnswer: ["-5", "-1", "0", "2"],
    explanation: "On the number line, negative numbers are to the left. -5 is the smallest."
  },
  {
    id: 7002,
    subject: Subject.MATH,
    skillTag: "Integer Arithmetic",
    questionText: "Solve: (-5) + (+2) - (-3) = ?",
    interactionType: InteractionType.INPUT,
    correctAnswer: "0",
    explanation: "-5 + 2 = -3. Then subtracting -3 is like adding 3. -3 + 3 = 0. (Requires strict sign rules)."
  },
  {
    id: 7003,
    subject: Subject.MATH,
    skillTag: "Algebra Substitution",
    questionText: "If a = 2 and b = -1, find the value of: a - b + ab",
    interactionType: InteractionType.INPUT,
    correctAnswer: "1",
    explanation: "2 - (-1) + (2 * -1) => 2 + 1 - 2 => 3 - 2 = 1. (Tricky signs)."
  },
  {
    id: 7004,
    subject: Subject.MATH,
    skillTag: "Algebraic Pattern",
    questionText: "Number of matchsticks needed to make 'n' squares joined in a row is:",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "4n" },
      { id: 'B', text: "3n + 1" },
      { id: 'C', text: "4n - 1" },
      { id: 'D', text: "2n + 2" }
    ],
    correctAnswer: "B",
    explanation: "1 sq = 4 sticks. 2 sq = 7 sticks (shared side). 3 sq = 10 sticks. Formula is 3n+1."
  },
  {
    id: 7005,
    subject: Subject.MATH,
    skillTag: "Equation Formulation",
    questionText: "1/3 of a number is 5 less than 1/2 of the number. What is the number?",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "15" },
      { id: 'B', text: "30" },
      { id: 'C', text: "60" },
      { id: 'D', text: "10" }
    ],
    correctAnswer: "B",
    explanation: "x/2 - x/3 = 5. x/6 = 5. x = 30."
  },
  {
    id: 7006,
    subject: Subject.MATH,
    skillTag: "Number Theory",
    questionText: "Which of these numbers has exactly 3 factors?",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "4" },
      { id: 'B', text: "6" },
      { id: 'C', text: "7" },
      { id: 'D', text: "12" }
    ],
    correctAnswer: "A",
    explanation: "Square of a prime (2) has exactly 3 factors: 1, 2, 4. Primes have 2, Composites usually >2."
  },
  {
    id: 7007,
    subject: Subject.MATH,
    skillTag: "Decimal Division",
    questionText: "A car travels 60km in 1.5 hours. Calculate Speed (km/h).",
    interactionType: InteractionType.CALCULATOR,
    correctAnswer: "40",
    explanation: "Speed = Distance/Time. 60 / 1.5 = 40 km/h."
  },
  {
    id: 7008,
    subject: Subject.MATH,
    skillTag: "Reverse Mensuration",
    questionText: "Total surface area of a cube is 24 cm². What is the side length (cm)?",
    interactionType: InteractionType.CALCULATOR,
    correctAnswer: "2",
    explanation: "6 * side² = 24. side² = 4. side = 2."
  },
  {
    id: 7009,
    subject: Subject.MATH,
    skillTag: "Algebra Modeling",
    questionText: "Length of a rectangle is double its breadth. Perimeter is 30cm. Find Length.",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "5" },
      { id: 'B', text: "10" },
      { id: 'C', text: "15" },
      { id: 'D', text: "20" }
    ],
    correctAnswer: "B",
    explanation: "Let B=x, L=2x. P = 2(x+2x) = 6x. 30=6x -> x=5. Length=10."
  },
  {
    id: 7010,
    subject: Subject.MATH,
    skillTag: "Area Subtraction",
    questionText: "A floor is 5m by 4m. A square carpet of side 3m is laid on it. Area NOT carpeted?",
    interactionType: InteractionType.CALCULATOR,
    correctAnswer: "11",
    explanation: "Floor Area (20) - Carpet Area (9) = 11 m²."
  },
  {
    id: 7011,
    subject: Subject.MATH,
    skillTag: "Fraction of Quantity",
    questionText: "Calculate: 2/3 of 18",
    interactionType: InteractionType.CALCULATOR,
    correctAnswer: "12",
    explanation: "(18 ÷ 3) × 2 = 6 × 2 = 12."
  },
  {
    id: 7012,
    subject: Subject.MATH,
    skillTag: "Working Backwards",
    questionText: "I multiplied a number by -1, then subtracted 5. Result is -10. What was the number?",
    interactionType: InteractionType.INPUT,
    correctAnswer: "5",
    explanation: "-10 + 5 = -5. -5 / -1 = 5. Check: 5*-1 = -5. -5-5 = -10."
  },
  {
    id: 7013,
    subject: Subject.MATH,
    skillTag: "Number Sense",
    questionText: "The sum of three consecutive integers is 12. What is the middle integer?",
    interactionType: InteractionType.INPUT,
    correctAnswer: "4",
    explanation: "Average of 3 consecutive numbers is the middle one. 12/3 = 4."
  },
  {
    id: 7014,
    subject: Subject.MATH,
    skillTag: "Decimal Mental Math",
    questionText: "The sum of 13.5 and 1.5 is:",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "14" },
      { id: 'B', text: "15" },
      { id: 'C', text: "15.5" },
      { id: 'D', text: "13.515" }
    ],
    correctAnswer: "B",
    explanation: ".5 + .5 = 1. Total is 15."
  },
  {
    id: 7015,
    subject: Subject.SCIENCE,
    skillTag: "Multi-stage Process",
    questionText: "Order the steps to separate Salt, Sand, and Iron Filings.",
    interactionType: InteractionType.REORDER,
    options: [
      { id: '1', text: "Magnet" },
      { id: '2', text: "Water (Dissolve)" },
      { id: '3', text: "Filter" },
      { id: '4', text: "Heat/Evaporate" }
    ],
    correctAnswer: ["Magnet", "Water (Dissolve)", "Filter", "Heat/Evaporate"],
    explanation: "First remove Iron (Magnet), then dissolve Salt (Water), Filter Sand, Evaporate Water."
  },
  {
    id: 7016,
    subject: Subject.SCIENCE,
    skillTag: "Conductors vs Insulators",
    questionText: "Sort materials by electrical conductivity.",
    interactionType: InteractionType.CATEGORIZE,
    categories: [
      { id: 'C', label: "Conductor", visual: "⚡" },
      { id: 'I', label: "Insulator", visual: "🛑" }
    ],
    options: [
      { id: '1', text: "Copper", bucketId: 'C' },
      { id: '2', text: "Wood", bucketId: 'I' },
      { id: '3', text: "Plastic", bucketId: 'I' },
      { id: '4', text: "Iron", bucketId: 'C' }
    ],
    correctAnswer: ["1:C", "2:I", "3:I", "4:C"],
    explanation: "Metals conduct electricity; Wood and Plastic do not."
  },
  {
    id: 7017,
    subject: Subject.SCIENCE,
    skillTag: "Astronomy Geometry",
    questionText: "Why do we see the Moon's shape change (Phases)?",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Earth's shadow falls on it" },
      { id: 'B', text: "We see only the sun-lit part as it orbits" },
      { id: 'C', text: "Clouds hide it" }
    ],
    correctAnswer: "B",
    explanation: "Phases are viewing angles of the sun-lit half, NOT shadows (That's an eclipse)."
  },
  {
    id: 7018,
    subject: Subject.SCIENCE,
    skillTag: "Combustion Science",
    questionText: "Why does blowing on a burning candle put it out?",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "CO2 in breath" },
      { id: 'B', text: "Air removes heat (Lowers temp)" },
      { id: 'C', text: "Air cuts Oxygen" }
    ],
    correctAnswer: "B",
    explanation: "Blowing removes heat, lowering the temperature below the ignition point."
  },
  {
    id: 7019,
    subject: Subject.SCIENCE,
    skillTag: "Material Property",
    questionText: "Can a magnet attract a plastic button?",
    interactionType: InteractionType.BINARY,
    options: [
      { id: 'True', text: "Yes" },
      { id: 'False', text: "No" },
    ],
    correctAnswer: "False",
    explanation: "Magnetism is a property of the material (Iron/Nickel/Cobalt), not the magnet's strength."
  },
  {
    id: 7020,
    subject: Subject.SCIENCE,
    skillTag: "Anomalous Expansion",
    questionText: "When water freezes to ice, its volume...",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Decreases" },
      { id: 'B', text: "Increases (Expands)" },
      { id: 'C', text: "Stays same" }
    ],
    correctAnswer: "B",
    explanation: "Water expands on freezing (Why pipes burst). Most other solids contract."
  },
  {
    id: 7021,
    subject: Subject.SCIENCE,
    skillTag: "Gas Solubility",
    questionText: "Why do fish die in boiled water (even if cooled)?",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Water is toxic" },
      { id: 'B', text: "No dissolved Oxygen left" },
      { id: 'C', text: "Water is soft" }
    ],
    correctAnswer: "B",
    explanation: "Boiling removes dissolved gases needed for gills to breathe."
  },
  {
    id: 7022,
    subject: Subject.SCIENCE,
    skillTag: "Geomagnetism",
    questionText: "Why does a compass needle always point North-South?",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Earth is a giant magnet" },
      { id: 'B', text: "Gravity pulls North" },
      { id: 'C', text: "Air pushes it" }
    ],
    correctAnswer: "A",
    explanation: "The needle aligns with Earth's magnetic field."
  },
  {
    id: 7023,
    subject: Subject.SCIENCE,
    skillTag: "Troubleshooting",
    questionText: "Switch is ON, Cell is new, but Bulb doesn't glow. Why?",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Switch is plastic" },
      { id: 'B', text: "Filament is broken (Fused)" },
      { id: 'C', text: "Wire is copper" }
    ],
    correctAnswer: "B",
    explanation: "Identifying 'Open Circuit' due to filament break despite closed switch."
  },
  {
    id: 7024,
    subject: Subject.SCIENCE,
    skillTag: "Change Types",
    questionText: "Categorize the changes.",
    interactionType: InteractionType.CATEGORIZE,
    categories: [
      { id: 'P', label: "Physical/Reversible" },
      { id: 'C', label: "Chemical/Irreversible" }
    ],
    options: [
      { id: '1', text: "Melting Ice", bucketId: 'P' },
      { id: '2', text: "Burning Paper", bucketId: 'C' },
      { id: '3', text: "Boiling Water", bucketId: 'P' },
      { id: '4', text: "Rusting Iron", bucketId: 'C' }
    ],
    correctAnswer: ["1:P", "2:C", "3:P", "4:C"],
    explanation: "State changes are physical. New substances (Ash, Rust) are chemical."
  },
  {
    id: 7025,
    subject: Subject.SCIENCE,
    skillTag: "Density Principle",
    questionText: "Sinking objects have density _____ than water.",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Lower" },
      { id: 'B', text: "Higher" },
      { id: 'C', text: "Same" }
    ],
    correctAnswer: "B",
    explanation: "Objects denser than the fluid will sink."
  },
  {
    id: 7026,
    subject: Subject.SCIENCE,
    skillTag: "Device Anatomy",
    questionText: "Which part of a bulb glows?",
    interactionType: InteractionType.WORD_SELECT,
    options: [
      { id: 'A', text: "Glass" },
      { id: 'B', text: "Base" },
      { id: 'C', text: "Filament" },
      { id: 'D', text: "Wire" }
    ],
    correctAnswer: "Filament",
    explanation: "The tungsten filament heats up and glows."
  },
  {
    id: 7027,
    subject: Subject.SCIENCE,
    skillTag: "Rectilinear Propagation",
    questionText: "Why can't we see through a bent pipe?",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Light travels in straight lines" },
      { id: 'B', text: "Pipe is dark" },
      { id: 'C', text: "Light is slow" }
    ],
    correctAnswer: "A",
    explanation: "Proof of rectilinear propagation of light."
  },
  {
    id: 7028,
    subject: Subject.ENGLISH,
    skillTag: "Proximity Rule",
    questionText: "Neither the captain nor the players _____ present.",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Was" },
      { id: 'B', text: "Were" }
    ],
    correctAnswer: "B",
    explanation: "In 'Neither...Nor', verb agrees with the *closest* subject (Players -> Were)."
  },
  {
    id: 7029,
    subject: Subject.ENGLISH,
    skillTag: "Subjunctive Mood",
    questionText: "I wish I _____ a bird.",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Am" },
      { id: 'B', text: "Was" },
      { id: 'C', text: "Were" }
    ],
    correctAnswer: "C",
    explanation: "Hypothetical desires use 'Were' even for singular 'I' (Subjunctive)."
  },
  {
    id: 7030,
    subject: Subject.ENGLISH,
    skillTag: "Fixed Preposition",
    questionText: "She prevented me _____ going there.",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "To" },
      { id: 'B', text: "From" },
      { id: 'C', text: "By" }
    ],
    correctAnswer: "B",
    explanation: "Prevent takes 'From' + Gerund."
  },
  {
    id: 7031,
    subject: Subject.ENGLISH,
    skillTag: "Complex Agreement",
    questionText: "Choose the correct sentence:",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "One of my friend is here." },
      { id: 'B', text: "One of my friends are here." },
      { id: 'C', text: "One of my friends is here." }
    ],
    correctAnswer: "C",
    explanation: "'One of' + Plural Noun + Singular Verb. (The subject is 'One')."
  },
  {
    id: 7032,
    subject: Subject.ENGLISH,
    skillTag: "Relative Pronoun",
    questionText: "He is the man _____ I met yesterday.",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Who" },
      { id: 'B', text: "Whom" },
      { id: 'C', text: "Which" }
    ],
    correctAnswer: "B",
    explanation: "Object case (I met *him* -> Whom)."
  },
  {
    id: 7033,
    subject: Subject.ENGLISH,
    skillTag: "Interrogative Passive",
    questionText: "Build the Passive Voice: 'Who wrote this letter?'",
    interactionType: InteractionType.REORDER,
    options: [
      { id: 'A', text: "By whom" },
      { id: 'B', text: "was" },
      { id: 'C', text: "this letter" },
      { id: 'D', text: "written?" }
    ],
    correctAnswer: ["By whom", "was", "this letter", "written?"],
    explanation: "Who -> By Whom. Question structure is preserved (Auxiliary before Subject)."
  },
  {
    id: 7034,
    subject: Subject.ENGLISH,
    skillTag: "Conditional Type 3",
    questionText: "If I had known, I _____ have come.",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Will" },
      { id: 'B', text: "Would" },
      { id: 'C', text: "Can" }
    ],
    correctAnswer: "B",
    explanation: "Past unreal conditional: Had known -> Would have."
  },
  {
    id: 7035,
    subject: Subject.ENGLISH,
    skillTag: "Pronoun Order",
    questionText: "You, he, and I _____ friends.",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Am" },
      { id: 'B', text: "Are" },
      { id: 'C', text: "Is" }
    ],
    correctAnswer: "B",
    explanation: "Plural subject (You+He+I) -> Are."
  },
  {
    id: 7036,
    subject: Subject.ENGLISH,
    skillTag: "Proverb Interpretation",
    questionText: "\"A rolling stone gathers no moss.\" What does it mean?",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Stones should stay still" },
      { id: 'B', text: "A person moving constantly gains no roots/wealth" },
      { id: 'C', text: "Moss is bad" }
    ],
    correctAnswer: "B",
    explanation: "Metaphorical meaning about lack of stability."
  },
  {
    id: 7037,
    subject: Subject.ENGLISH,
    skillTag: "Passive Voice",
    questionText: "Convert: \"Ram eats an apple.\"",
    interactionType: InteractionType.REORDER,
    options: [
      { id: '1', text: "An apple" },
      { id: '2', text: "is eaten" },
      { id: '3', text: "by Ram" }
    ],
    correctAnswer: ["An apple", "is eaten", "by Ram"],
    explanation: "Object becomes Subject. Present Tense is maintained."
  },
  {
    id: 7038,
    subject: Subject.ENGLISH,
    skillTag: "Idioms",
    questionText: "\"To let the cat out of the bag\" means:",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "Lose a pet" },
      { id: 'B', text: "Reveal a secret" },
      { id: 'C', text: "Run away" }
    ],
    correctAnswer: "B",
    explanation: "Figurative language for disclosing a secret."
  },
  {
    id: 7039,
    subject: Subject.ENGLISH,
    skillTag: "Noun Types",
    questionText: "Which is an Abstract Noun?",
    interactionType: InteractionType.WORD_SELECT,
    options: [
      { id: 'A', text: "Table" },
      { id: 'B', text: "Kindness" },
      { id: 'C', text: "School" }
    ],
    correctAnswer: "Kindness",
    explanation: "Kindness is a quality/feeling, not a physical object."
  },
  {
    id: 7040,
    subject: Subject.ENGLISH,
    skillTag: "Adverb Placement",
    questionText: "Choose the correct order:",
    interactionType: InteractionType.MULTIPLE_CHOICE,
    options: [
      { id: 'A', text: "He is always late." },
      { id: 'B', text: "He always is late." },
      { id: 'C', text: "Always he is late." }
    ],
    correctAnswer: "A",
    explanation: "Adverbs of frequency usually come after the verb 'to be'."
  }
];
