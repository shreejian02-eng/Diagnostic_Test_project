
export enum Subject {
  MATH = 'Mathematics',
  SCIENCE = 'Science',
  ENGLISH = 'English'
}

export enum InteractionType {
  MULTIPLE_CHOICE = 'MCQ',
  BINARY = 'BINARY', // Yes/No, True/False
  INPUT = 'INPUT', // User types answer
  REORDER = 'REORDER', // Drag/Click to sort (SequencerEngine)
  VISUAL = 'VISUAL', // Visual focus
  SLIDER = 'SLIDER', // Interactive slider/ruler
  WORD_SELECT = 'WORD_SELECT', // Tap specific word in sentence
  CALCULATOR = 'CALCULATOR', // Numeric keypad input
  CATEGORIZE = 'CATEGORIZE', // Sort items into buckets (SorterEngine)
  SELECTION_GRID = 'SELECTION_GRID', // Select multiple correct options
  DRAG_TO_SLOTS = 'DRAG_TO_SLOTS', // Drag digits into specific ordered slots
  
  // NEW JUNIOR INTERACTIONS
  OBJECT_ARITHMETIC = 'OBJECT_ARITHMETIC', // Click to add/remove visual items
  COIN_BUILDER = 'COIN_BUILDER', // Drag coins to count value
  CLOCK_BUILDER = 'CLOCK_BUILDER', // Set time on clock
  PATTERN_BUILDER = 'PATTERN_BUILDER', // Visual pattern completion
  WEIGHT_BALANCE = 'WEIGHT_BALANCE', // Compare weights
  TIMELINE = 'TIMELINE', // Day/Sequence ordering
  MATCHING = 'MATCHING', // Pair items together (Quizlet style)
  LOCATOR = 'LOCATOR' // Visual identification (LocatorEngine)
}

export interface Category {
  id: string;
  label: string;
  visual?: string; // Emoji
}

export interface QuestionOption {
  id: string; // Used for Min/Max/Step in Slider, or word ID
  text: string;
  visual?: string; // Emoji, Icon, or CSS background for fractions
  isCorrect?: boolean;
  bucketId?: string; // For CATEGORIZE type
  value?: number; // Numeric value for builders
  hotspot?: { x: number; y: number; w: number; h: number }; // For LOCATOR type (percentages)
}

export interface Question {
  id: number;
  subject: Subject;
  skillTag: string; // e.g., "Place Value", "Photosynthesis"
  questionText: string;
  interactionType: InteractionType;
  backgroundImage?: string; // For LOCATOR type
  options?: QuestionOption[]; // For MCQ, Visual, Binary, Slider Config
  categories?: Category[]; // For CATEGORIZE or SLOTS
  correctAnswer: string | string[]; // String for MCQ/Input, Array for Order/Selection
  explanation: string;
}

export interface UserResponse {
  questionId: number;
  isCorrect: boolean;
  userAnswer: string | string[];
}

export interface Analytics {
  score: number;
  totalQuestions: number;
  bySubject: { [key in Subject]: { correct: number; total: number; percentage: number } };
  weakAreas: string[];
  strongAreas: string[];
}