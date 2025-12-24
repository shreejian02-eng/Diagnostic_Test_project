import React, { useState, useEffect } from 'react';
import { getQuestionsForGrade } from './constants';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';
import { UserResponse, Analytics, Question, Subject } from './types';
import { calculateAnalytics } from './utils/scoring';
import { Sun, Moon, Trophy, Play, GraduationCap, Star, BookOpen } from 'lucide-react';

function App() {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  
  // Question Tracking for Restarts
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<number>>(new Set());
  
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation State for Progress Bar
  const [isProgressAnimating, setIsProgressAnimating] = useState(false);

  // Theme Toggle Effect
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Trigger progress animation when question index changes
  useEffect(() => {
    if (currentQuestionIndex > 0) {
      setIsProgressAnimating(true);
      const timer = setTimeout(() => setIsProgressAnimating(false), 400);
      return () => clearTimeout(timer);
    }
  }, [currentQuestionIndex]);

  // --- Dynamic Theme Logic ---
  const getTheme = (grade: number | null) => {
    if (!grade) return { mode: 'middle' as const, bg: 'bg-slate-50', primary: 'text-brand-500', button: 'bg-brand-600' };
    
    // Junior (3-5)
    if (grade <= 5) return {
      mode: 'junior' as const,
      bg: 'bg-yellow-50 dark:bg-slate-900',
      textPrimary: 'text-pink-600 dark:text-pink-400',
      button: 'bg-pink-500 hover:bg-pink-400',
      accent: 'text-cyan-500',
      font: 'font-extrabold tracking-wide',
      iconSize: 80
    };

    // Middle (6-8)
    if (grade <= 8) return {
      mode: 'middle' as const,
      bg: 'bg-indigo-50 dark:bg-slate-950',
      textPrimary: 'text-indigo-600 dark:text-indigo-400',
      button: 'bg-indigo-600 hover:bg-indigo-500',
      accent: 'text-teal-500',
      font: 'font-bold tracking-normal',
      iconSize: 70
    };

    // Senior (9-12)
    return {
      mode: 'senior' as const,
      bg: 'bg-slate-100 dark:bg-slate-950',
      textPrimary: 'text-slate-800 dark:text-slate-200',
      button: 'bg-slate-800 hover:bg-slate-700',
      accent: 'text-blue-500',
      font: 'font-semibold tracking-tight',
      iconSize: 60
    };
  };

  const theme = getTheme(selectedGrade);

  const handleStart = () => {
    if (!selectedGrade) return;

    const gradeBank = getQuestionsForGrade(selectedGrade);

    // 1. Filter out already used questions to ensure freshness
    let availableQuestions = gradeBank.filter(q => !usedQuestionIds.has(q.id));
    let didReset = false;

    // 2. If we don't have enough for a full game (40), reset the history to the full bank
    // Note: For demo grades (3/12), the bank is small, so we just use what we have.
    const targetCount = Math.min(40, gradeBank.length);

    if (availableQuestions.length < targetCount) {
        availableQuestions = [...gradeBank];
        didReset = true;
    }

    // 3. Shuffle available questions
    const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
    
    // 4. Take the needed amount
    const selectedSessionQuestions = shuffled.slice(0, targetCount);

    // 5. Group by Subject (Math -> Science -> English)
    const subjectPriority: Record<string, number> = {
      [Subject.MATH]: 1,
      [Subject.SCIENCE]: 2,
      [Subject.ENGLISH]: 3
    };

    const groupedQuestions = selectedSessionQuestions.sort((a, b) => {
        const pA = subjectPriority[a.subject] || 99;
        const pB = subjectPriority[b.subject] || 99;
        return pA - pB;
    });

    // 6. Update used IDs tracking
    const newUsedIds = didReset ? new Set<number>() : new Set(usedQuestionIds);
    selectedSessionQuestions.forEach(q => newUsedIds.add(q.id));
    setUsedQuestionIds(newUsedIds);
    
    // 7. Start the Game
    setQuestions(groupedQuestions);
    setStarted(true);
    setCurrentQuestionIndex(0);
    setResponses([]);
    setIsFinished(false);
  };

  const handleAnswer = (isCorrect: boolean, userAnswer: string | string[]) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const currentQ = questions[currentQuestionIndex];
    
    const newResponses = [...responses, {
      questionId: currentQ.id,
      isCorrect,
      userAnswer
    }];
    setResponses(newResponses);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsSubmitting(false);
      } else {
        finishTest(newResponses);
      }
    }, 300);
  };

  const finishTest = (finalResponses: UserResponse[]) => {
    const results = calculateAnalytics(finalResponses, questions);
    setAnalytics(results);
    setIsFinished(true);
  };

  // --- RENDERING ---

  const ThemeToggle = () => (
    <button 
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="absolute top-4 left-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-800 dark:text-yellow-400 hover:scale-110 transition-all border border-slate-100 dark:border-slate-700"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );

  // 0. Grade Selection Screen
  if (selectedGrade === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        <ThemeToggle />
        <div className="max-w-4xl w-full text-center space-y-8 animate-pop">
           <div className="bg-white dark:bg-slate-800 p-6 rounded-[2rem] w-32 h-32 mx-auto flex items-center justify-center shadow-2xl mb-6">
            <GraduationCap size={60} className="text-brand-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tight">
             LevelUp <span className="text-brand-500">Diagnostic</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-medium">Select your grade level to begin:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
             {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((grade) => {
               // Styling based on grade groups
               let btnStyle = "";
               let icon = null;
               if (grade <= 5) {
                 btnStyle = "bg-yellow-100 hover:bg-yellow-200 text-yellow-700 border-yellow-300 rounded-[2rem]";
                 icon = <Star size={16} fill="currentColor" />;
               } else if (grade <= 8) {
                 btnStyle = "bg-indigo-100 hover:bg-indigo-200 text-indigo-700 border-indigo-300 rounded-2xl";
                 icon = <BookOpen size={16} />;
               } else {
                 btnStyle = "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300 rounded-lg";
                 icon = <GraduationCap size={16} />;
               }

               return (
                 <button 
                   key={grade}
                   onClick={() => setSelectedGrade(grade)}
                   className={`h-24 flex flex-col items-center justify-center gap-2 border-b-4 shadow-sm active:scale-95 transition-all ${btnStyle}`}
                 >
                    <span className="text-3xl font-black">{grade}</span>
                    <span className="text-xs uppercase font-bold flex items-center gap-1">{icon} Grade</span>
                 </button>
               )
             })}
          </div>
        </div>
      </div>
    );
  }

  // 1. Welcome Screen (Dynamic)
  if (!started) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${theme.bg}`}>
        <ThemeToggle />
        <div className="absolute top-4 right-4">
           <button onClick={() => setSelectedGrade(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white font-bold text-sm">Change Grade</button>
        </div>

        <div className="max-w-4xl w-full text-center space-y-8 animate-pop">
          <div className={`bg-white dark:bg-slate-800 p-6 mx-auto flex items-center justify-center shadow-2xl shadow-indigo-100 dark:shadow-none mb-6 transition-all duration-500 
             ${theme.mode === 'junior' ? 'rounded-[3rem] w-40 h-40 rotate-3 hover:rotate-0' : 'rounded-2xl w-32 h-32'}`}>
            <Trophy size={theme.mode === 'junior' ? 80 : 60} className={theme.accent} strokeWidth={1.5} />
          </div>
          <h1 className={`text-4xl md:text-5xl ${theme.font} text-slate-800 dark:text-white`}>
            Grade {selectedGrade} <span className={theme.textPrimary}>Diagnostic</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-medium max-w-lg mx-auto">
            {theme.mode === 'junior' ? "Let's play and learn! 🎮" : theme.mode === 'middle' ? "Challenge yourself! 🚀" : "Assess your academic readiness. 🎓"}
            <br/>
            <span className={`text-sm font-bold bg-white dark:bg-slate-800 px-4 py-2 rounded-full mt-4 inline-block shadow-sm ${theme.textPrimary}`}>
               {questions.length > 0 ? `${questions.length} Questions Queued` : 'Ready to Start'}
            </span>
          </p>

          <div className="flex justify-center my-10">
             <button 
                onClick={handleStart}
                className={`group relative inline-flex items-center justify-center px-10 py-5 text-white transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 
                   ${theme.button} 
                   ${theme.mode === 'junior' ? 'rounded-[2rem] font-black text-2xl' : 'rounded-xl font-bold text-xl'}
                `}
             >
                 <span className="mr-3">Start Test</span>
                 <Play size={28} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Results Screen
  if (isFinished && analytics) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 transition-colors duration-300">
        <ThemeToggle />
        <Results analytics={analytics} onRestart={() => setStarted(false)} />
      </div>
    );
  }

  // 3. Question Screen
  const currentQ = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme.bg} overflow-hidden relative`}>
      <ThemeToggle />
      
      <div 
        className={`h-4 bg-slate-200 dark:bg-slate-800 w-full overflow-hidden relative origin-top transition-none ${isProgressAnimating ? 'animate-progress-pop z-20' : 'z-0'}`}
      >
        <div 
          className={`h-full animate-shimmer transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_0_20px_rgba(14,165,233,0.6)] relative
             ${theme.mode === 'junior' ? 'bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400' : 'bg-gradient-to-r from-brand-400 via-purple-400 to-brand-600'}
          `}
          style={{ width: `${progress}%` }}
        >
           <div className="absolute right-0 top-0 h-full w-2 bg-white/60 blur-[4px] shadow-[0_0_15px_white]" />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        {questions.length > 0 ? (
          <QuestionCard 
            key={currentQ.id}
            question={currentQ} 
            onAnswer={handleAnswer} 
            isSubmitting={isSubmitting}
            mode={theme.mode}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />
        ) : (
           <div className="text-slate-500 font-bold">No questions available.</div>
        )}
      </div>

      {questions.length > 0 && (
        <div className="p-6 text-center text-slate-400 text-sm font-bold uppercase tracking-widest">
          Question {currentQuestionIndex + 1} / {questions.length}
        </div>
      )}
    </div>
  );
}

export default App;