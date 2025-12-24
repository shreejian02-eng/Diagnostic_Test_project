import React, { useState, useEffect } from 'react';
import { Question, InteractionType, QuestionOption } from '../types';
import { ChevronRight } from 'lucide-react';
import { 
  MCQInteraction, 
  InputInteraction, 
  CalculatorInteraction, 
  SliderInteraction, 
  CategorizeInteraction, 
  WordSelectInteraction,
  ReorderInteraction,
  ObjectArithmeticInteraction,
  CoinBuilderInteraction,
  ClockBuilderInteraction,
  PatternBuilderInteraction,
  TimelineInteraction,
  WeightBalanceInteraction,
  SelectionGridInteraction,
  DragToSlotsInteraction,
  MatchingInteraction,
  LocatorInteraction
} from './InteractionLibrary';

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean, answer: string | string[]) => void;
  isSubmitting: boolean;
  mode: 'junior' | 'middle' | 'senior';
  isLastQuestion: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, isSubmitting, mode, isLastQuestion }) => {
  // --- STATE MANAGEMENT ---
  const [value, setValue] = useState<any>(null);

  // Reset state when question changes
  useEffect(() => {
    // Default initial values based on type
    if (question.interactionType === InteractionType.SLIDER) {
        const startVal = Number(question.options?.find(o => o.id === 'value')?.text) || Number(question.options?.find(o => o.id === 'min')?.text) || 0;
        setValue(startVal);
    } else if (question.interactionType === InteractionType.REORDER || question.interactionType === InteractionType.TIMELINE) {
        // Shuffle options for reorder
        // Safety: If options are provided, use them. If not (common in some data entries), use correctAnswer shuffled.
        let itemsToShuffle: string[] = [];
        
        if (question.options && question.options.length > 0) {
            itemsToShuffle = question.options.map(o => o.text);
        } else if (Array.isArray(question.correctAnswer)) {
            // Clone and shuffle correct answer as fallback
            itemsToShuffle = [...question.correctAnswer];
        } else if (typeof question.correctAnswer === 'string') {
             // Try parsing if it's a JSON string array
             try {
                 const parsed = JSON.parse(question.correctAnswer);
                 if (Array.isArray(parsed)) itemsToShuffle = [...parsed];
             } catch(e) {}
        }
        
        // Randomize
        const shuffled = itemsToShuffle.sort(() => Math.random() - 0.5);
        setValue(shuffled);
    } else if (question.interactionType === InteractionType.SELECTION_GRID) {
        setValue([]);
    } else if (question.interactionType === InteractionType.CATEGORIZE) {
        setValue({}); // { itemId: bucketId }
    } else if (question.interactionType === InteractionType.DRAG_TO_SLOTS) {
        setValue({}); // { slotId: optionText }
    } else if (question.interactionType === InteractionType.OBJECT_ARITHMETIC) {
        const total = Number(question.options?.find(o => o.id === 'total')?.text) || 12;
        setValue(Array.from({ length: total }, (_, i) => i));
    } else if (question.interactionType === InteractionType.CLOCK_BUILDER) {
        setValue("12:00");
    } else if (question.interactionType === InteractionType.MATCHING) {
        setValue([]); // Array of matched IDs
    } else if (question.interactionType === InteractionType.LOCATOR) {
        setValue(null); // Selected ID
    } else {
        setValue(null); // MCQ, Input, etc.
    }
  }, [question]);

  const handleSubmit = () => {
    let correct = false;
    let finalAnswer = value;

    // --- LOGIC ---
    switch (question.interactionType) {
      case InteractionType.MULTIPLE_CHOICE:
      case InteractionType.BINARY:
      case InteractionType.WORD_SELECT:
      case InteractionType.WEIGHT_BALANCE:
      case InteractionType.LOCATOR: // Logic for Locator: value is ID, check against correctAnswer ID
        correct = value === question.correctAnswer;
        break;

      case InteractionType.INPUT:
      case InteractionType.PATTERN_BUILDER:
        if (!value) return;
        correct = String(value).trim().toLowerCase() === (question.correctAnswer as string).toLowerCase();
        break;

      case InteractionType.CALCULATOR:
      case InteractionType.SLIDER:
      case InteractionType.COIN_BUILDER:
        correct = String(value) === question.correctAnswer;
        finalAnswer = String(value);
        break;

      case InteractionType.OBJECT_ARITHMETIC:
         // Value is array of indices (active items). Check count.
         const count = Array.isArray(value) ? value.length : 0;
         correct = String(count) === question.correctAnswer;
         finalAnswer = String(count);
         break;
        
      case InteractionType.CLOCK_BUILDER:
        // Compare time strings "3:00" === "3:00"
        correct = String(value) === question.correctAnswer;
        break;

      case InteractionType.REORDER:
      case InteractionType.TIMELINE:
        // value is array of strings
        let correctOrder: string[] = [];
        try {
            correctOrder = typeof question.correctAnswer === 'string' 
                ? JSON.parse(question.correctAnswer) 
                : question.correctAnswer;
        } catch (e) {
            correctOrder = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
        }
        correct = JSON.stringify(value) === JSON.stringify(correctOrder);
        break;

      case InteractionType.CATEGORIZE:
        if (!question.options) return;
        // value is { itemId: bucketId }
        // Check if every item in question.options has a matching entry in value that matches its bucketId
        const allCorrect = question.options.every(opt => value[opt.id] === opt.bucketId);
        correct = allCorrect;
        finalAnswer = JSON.stringify(value);
        break;
        
      case InteractionType.SELECTION_GRID:
        const correctIds = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
        const selectedIds = value || [];
        // Check if arrays are same length and contain same elements
        correct = selectedIds.length === correctIds.length && selectedIds.every((id: string) => correctIds.includes(id));
        finalAnswer = JSON.stringify(selectedIds);
        break;

      case InteractionType.DRAG_TO_SLOTS:
         try {
             // Correct answer is JSON string mapping { slotId: "text" }
             const correctMapping = JSON.parse(question.correctAnswer as string);
             let allMatch = true;
             
             for (const [slotId, expectedVal] of Object.entries(correctMapping)) {
                 const userOptionId = value[slotId];
                 const userOption = question.options?.find(o => o.id === userOptionId);
                 // We compare user option TEXT with expectedVal
                 if (!userOption || userOption.text !== expectedVal) {
                     // Fallback: maybe expectedVal is the ID?
                     if (userOptionId !== expectedVal) {
                         allMatch = false;
                         break;
                     }
                 }
             }
             correct = allMatch;
             finalAnswer = JSON.stringify(value);
         } catch(e) {
             console.error(e);
             correct = false;
         }
         break;
         
      case InteractionType.MATCHING:
         // Value is array of matched IDs. Correct if length equals total items.
         // question.options has all items.
         correct = value && question.options && value.length === question.options.length;
         finalAnswer = JSON.stringify(value);
         break;
    }

    onAnswer(correct, finalAnswer);
  };

  const canSubmit = () => {
      if (isSubmitting) return false;
      if (value === null || value === '') return false;
      if (question.interactionType === InteractionType.CATEGORIZE) {
          return question.options ? Object.keys(value).length === question.options.length : false;
      }
      if (question.interactionType === InteractionType.DRAG_TO_SLOTS) {
          return question.categories ? Object.keys(value).length === question.categories.length : false;
      }
      if (question.interactionType === InteractionType.MATCHING) {
          return question.options ? (value || []).length === question.options.length : false;
      }
      return true;
  };

  // --- RENDER ---
  return (
    <div className={`w-full max-w-2xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-2xl p-6 md:p-10 border border-white/50 dark:border-slate-800 animate-pop transition-colors relative
        ${mode === 'junior' ? 'rounded-[3rem] border-4 border-white' : 'rounded-3xl'}`}>
      
      {mode === 'junior' && (
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[3rem] pointer-events-none opacity-10">
               <div className="absolute top-10 left-[-20px] w-20 h-20 bg-yellow-300 rounded-full blur-xl"></div>
               <div className="absolute bottom-10 right-[-20px] w-32 h-32 bg-pink-300 rounded-full blur-2xl"></div>
          </div>
      )}

      <div className="flex justify-between items-center mb-6 relative z-10">
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border
            ${mode === 'junior' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}>
          {question.subject}
        </span>
        <span className="text-brand-500 text-sm font-bold bg-brand-50 dark:bg-brand-900/20 px-3 py-1 rounded-full">{question.skillTag}</span>
      </div>

      <h2 className={`font-black text-slate-800 dark:text-white leading-tight mb-2 relative z-10
         ${mode === 'junior' ? 'text-3xl md:text-4xl tracking-tight' : 'text-2xl md:text-3xl'}`}>
        {question.questionText}
      </h2>
      
      {mode === 'junior' ? (
          <div className="h-2 w-24 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mb-6"></div>
      ) : (
          <div className="h-1 w-20 bg-brand-500 rounded-full mb-6"></div>
      )}

      <div className="relative z-10">
        {(question.interactionType === InteractionType.MULTIPLE_CHOICE || question.interactionType === InteractionType.BINARY) && (
            <MCQInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}
        
        {question.interactionType === InteractionType.INPUT && (
            <InputInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}
        
        {question.interactionType === InteractionType.CALCULATOR && (
            <CalculatorInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}

        {question.interactionType === InteractionType.SLIDER && (
            <SliderInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}

        {question.interactionType === InteractionType.CATEGORIZE && (
            <CategorizeInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}

        {question.interactionType === InteractionType.WORD_SELECT && (
             <WordSelectInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}

        {(question.interactionType === InteractionType.REORDER || question.interactionType === InteractionType.TIMELINE) && (
             <ReorderInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}

        {question.interactionType === InteractionType.SELECTION_GRID && (
             <SelectionGridInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}

        {question.interactionType === InteractionType.DRAG_TO_SLOTS && (
             <DragToSlotsInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}

        {/* --- NEW JUNIOR INTERACTIONS --- */}
        {question.interactionType === InteractionType.OBJECT_ARITHMETIC && (
             <ObjectArithmeticInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}
        {question.interactionType === InteractionType.COIN_BUILDER && (
             <CoinBuilderInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}
        {question.interactionType === InteractionType.CLOCK_BUILDER && (
             <ClockBuilderInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}
        {question.interactionType === InteractionType.PATTERN_BUILDER && (
             <PatternBuilderInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}
        {question.interactionType === InteractionType.WEIGHT_BALANCE && (
             <WeightBalanceInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}
        {question.interactionType === InteractionType.MATCHING && (
             <MatchingInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}
        {question.interactionType === InteractionType.LOCATOR && (
             <LocatorInteraction question={question} value={value} onChange={setValue} variant={mode} isSubmitting={isSubmitting} />
        )}
      </div>

      <div className="mt-10 flex justify-end relative z-10">
        <button
          onClick={handleSubmit}
          disabled={!canSubmit()}
          className={`text-white font-bold py-4 px-10 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center gap-2
             ${mode === 'junior' 
                ? 'bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-400 hover:to-orange-300 rounded-[2rem] text-2xl shadow-orange-200' 
                : 'bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 rounded-2xl text-xl shadow-slate-300'
             }
          `}
        >
          {isLastQuestion ? 'See Results' : 'Next'} <ChevronRight size={24} strokeWidth={4} />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;