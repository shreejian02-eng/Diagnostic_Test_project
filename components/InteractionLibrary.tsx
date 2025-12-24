import React, { useState, useEffect, useRef } from 'react';
import { Question, QuestionOption, Category } from '../types';
import { Check, X, ArrowUp, ArrowDown, Plus, Minus, RotateCcw, GripHorizontal, Move, Eraser, Link, Info, Search } from 'lucide-react';

interface InteractionProps {
  question: Question;
  value: any;
  onChange: (val: any) => void;
  variant: 'junior' | 'middle' | 'senior';
  isSubmitting: boolean;
}

// --- HELPER: Visual Renderer ---
const RenderVisual = ({ visual, variant }: { visual?: string, variant: string }) => {
  if (!visual) return null;
  
  if (visual.startsWith('http') || visual.includes('data:image')) {
     return <img src={visual} alt="" className="max-h-32 mb-4 rounded-lg object-contain" />;
  }
  
  // Color block
  if (visual.startsWith('#') || visual.startsWith('rgb') || visual.includes('gradient')) {
    return (
      <div 
        className={`rounded-full mb-4 shadow-inner border-4 border-white dark:border-slate-700 ${variant === 'junior' ? 'w-24 h-24' : 'w-16 h-16'}`}
        style={{ background: visual }}
      />
    );
  }

  // Emoji or text icon
  return <div className={`filter drop-shadow-sm pointer-events-none ${variant === 'junior' ? 'text-6xl mb-4 animate-bounce-slow' : 'text-5xl mb-3'}`}>{visual}</div>;
};

// --- HELPER: Confetti Effect ---
const spawnConfetti = (x: number, y: number) => {
  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#A8E6CF'];
  for (let i = 0; i < 12; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    // Randomize initial position slightly
    el.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
};

// --- 1. MCQ & BINARY ---
export const MCQInteraction: React.FC<InteractionProps> = ({ question, value, onChange, variant, isSubmitting }) => {
  const gridCols = variant === 'junior' 
    ? "grid-cols-1 md:grid-cols-2" 
    : (question.options?.length || 0) > 3 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-4 mt-6 w-full`}>
      {question.options?.map((opt) => {
        const isSelected = value === opt.id;
        let style = "flex flex-col items-center justify-center transition-all duration-200 cursor-pointer relative overflow-hidden text-center";
        
        if (variant === 'junior') {
            style += ` p-6 rounded-[2rem] border-b-8 active:translate-y-2 active:border-b-0 min-h-[140px] 
              ${isSelected 
                ? 'bg-yellow-100 border-yellow-400 text-yellow-900 ring-4 ring-yellow-200 scale-105 z-10' 
                : 'bg-white border-slate-200 text-slate-800 hover:bg-cyan-50 hover:border-cyan-300 hover:-translate-y-1 shadow-lg'}`;
        } else {
             style += ` p-4 rounded-2xl border-2 min-h-[120px] active:scale-95
              ${isSelected 
                ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/30 text-brand-900 dark:text-brand-100 shadow-md ring-2 ring-brand-100' 
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-brand-300 hover:shadow-lg hover:bg-slate-50 dark:hover:bg-slate-750'}`;
        }

        return (
          <button key={opt.id} onClick={() => onChange(opt.id)} disabled={isSubmitting} className={style}>
            {variant === 'junior' && isSelected && <div className="absolute top-2 right-2 text-green-500"><Check size={24} strokeWidth={4} /></div>}
            <RenderVisual visual={opt.visual} variant={variant} />
            <span className={variant === 'junior' ? 'font-black text-xl leading-tight' : 'font-bold text-lg'}>{opt.text}</span>
          </button>
        );
      })}
    </div>
  );
};

// --- 2. INPUT ---
export const InputInteraction: React.FC<InteractionProps> = ({ value, onChange, variant, isSubmitting }) => {
  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type answer..."
        disabled={isSubmitting}
        className={`w-full text-center font-bold outline-none transition-all placeholder:text-slate-400
          ${variant === 'junior' 
            ? 'p-6 text-3xl rounded-[2rem] border-4 border-dashed border-slate-300 focus:border-brand-400 focus:bg-yellow-50 shadow-xl text-brand-600 bg-white' 
            : 'p-4 text-2xl rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 text-slate-900 dark:text-white'
          }
        `}
      />
    </div>
  );
};

// --- 3. CALCULATOR ---
export const CalculatorInteraction: React.FC<InteractionProps> = ({ value, onChange, isSubmitting }) => {
    const valStr = String(value || '');
    const handlePress = (key: string) => {
        if (isSubmitting) return;
        if (key === 'C') onChange('');
        else if (key === 'DEL') onChange(valStr.slice(0, -1));
        else if (valStr.length < 10) onChange(valStr + key);
    };

    return (
        <div className="mt-6 flex flex-col items-center">
            <div className="w-full max-w-xs bg-slate-100 dark:bg-slate-800 p-4 rounded-xl mb-4 text-right text-3xl font-mono font-bold tracking-widest text-slate-800 dark:text-white h-16 border-2 border-slate-200 dark:border-slate-600 shadow-inner flex items-center justify-end">
                {valStr || <span className="text-slate-300 dark:text-slate-600">0</span>}
            </div>
            <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                {[1,2,3,4,5,6,7,8,9,'.',0].map(n => (
                    <button key={n} onClick={() => handlePress(String(n))} className="p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm font-bold text-xl text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600 active:scale-95 transition-transform border-b-4 border-slate-200 dark:border-slate-900">
                        {n}
                    </button>
                ))}
                <button onClick={() => handlePress('DEL')} className="p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 rounded-lg font-bold border-b-4 border-red-200 dark:border-red-900 active:scale-95 flex items-center justify-center"><Eraser size={24} /></button>
            </div>
        </div>
    );
};

// --- 4. SLIDER ---
export const SliderInteraction: React.FC<InteractionProps> = ({ question, value, onChange, variant, isSubmitting }) => {
    const min = Number(question.options?.find(o => o.id === 'min')?.text) || 0;
    const max = Number(question.options?.find(o => o.id === 'max')?.text) || 100;
    const step = Number(question.options?.find(o => o.id === 'step')?.text) || 1;
    const label = question.options?.find(o => o.id === 'label')?.text || '';

    return (
        <div className="mt-8 w-full px-4">
            <div className="text-center text-5xl font-black text-brand-500 mb-8 font-mono">
                {value} <span className="text-xl text-slate-400 ml-2">{label}</span>
            </div>
            <input 
                type="range" 
                min={min} max={max} step={step} 
                value={value || min} 
                onChange={(e) => onChange(Number(e.target.value))}
                disabled={isSubmitting}
                className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500 hover:accent-brand-400"
            />
            <div className="flex justify-between text-slate-500 dark:text-slate-400 font-bold mt-3 text-sm">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    );
};

// --- 5. CATEGORIZE (SorterEngine) ---
export const CategorizeInteraction: React.FC<InteractionProps> = ({ question, value, onChange, variant, isSubmitting }) => {
    const categories = question.categories || [];
    const items = question.options || [];
    // value is { itemId: bucketId }
    const currentAssignment = value || {};
    
    // State for shake animation on wrong drop (Junior mode)
    const [shakingItem, setShakingItem] = useState<string | null>(null);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, itemId: string) => {
        e.dataTransfer.setData('text/plain', itemId);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, bucketId: string) => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData('text/plain');
        
        // JUNIOR MODE: Immediate Validation (Bounce Back)
        if (variant === 'junior') {
            const item = items.find(i => i.id === itemId);
            if (item && item.bucketId === bucketId) {
                // Correct
                onChange({ ...currentAssignment, [itemId]: bucketId });
                // Confetti at drop location
                spawnConfetti(e.clientX, e.clientY);
            } else {
                // Wrong: Shake item, don't move
                setShakingItem(itemId);
                setTimeout(() => setShakingItem(null), 500);
            }
        } else {
            // SENIOR MODE: Snap into place, validate later (on Submit)
            onChange({ ...currentAssignment, [itemId]: bucketId });
        }
    };

    const unassignedItems = items.filter(i => !currentAssignment[i.id]);

    return (
        <div className="mt-6 flex flex-col gap-8 select-none">
            {/* Draggable Items Area */}
            <div className="flex flex-wrap gap-3 justify-center min-h-[80px] p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                {unassignedItems.map(item => (
                    <div 
                        key={item.id} 
                        draggable={!isSubmitting}
                        onDragStart={(e) => handleDragStart(e, item.id)}
                        className={`px-4 py-2 bg-white dark:bg-slate-700 shadow-md rounded-lg font-bold border-b-4 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white cursor-grab active:cursor-grabbing flex items-center gap-2 transition-transform hover:scale-105
                            ${shakingItem === item.id ? 'animate-shake border-red-400 bg-red-50 text-red-600' : ''}
                            ${variant === 'junior' ? 'text-lg p-4 rounded-xl' : 'text-sm'}
                        `}
                    >
                        {item.visual} {item.text}
                    </div>
                ))}
                {unassignedItems.length === 0 && <div className="text-slate-400 italic font-bold">All sorted!</div>}
            </div>

            {/* Buckets / Drop Zones */}
            <div className={`grid gap-4 ${variant === 'junior' ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
                {categories.map(cat => (
                    <div 
                        key={cat.id}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, cat.id)}
                        className={`transition-colors duration-300
                            ${variant === 'junior' 
                                ? 'h-40 border-4 border-dashed border-slate-300 rounded-b-[2rem] bg-indigo-50/50 flex flex-col items-center justify-end pb-4 relative mt-8'
                                : 'min-h-[150px] border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 flex flex-col shadow-sm'
                            }
                        `}
                    >
                        {/* Label */}
                        <div className={`
                            ${variant === 'junior' 
                                ? 'absolute -top-6 bg-white border-2 border-indigo-200 px-4 py-1 rounded-full font-black text-indigo-600 shadow-sm'
                                : 'w-full bg-slate-100 dark:bg-slate-700 p-2 text-center font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-600 rounded-t-lg'
                            }
                        `}>
                            {cat.visual} {cat.label}
                        </div>

                        {/* Content */}
                        <div className={`flex flex-wrap gap-2 justify-center w-full p-2 ${variant === 'senior' ? 'flex-col items-stretch' : ''}`}>
                            {items.filter(i => currentAssignment[i.id] === cat.id).map(item => (
                                <div key={item.id} className={`
                                    ${variant === 'junior' 
                                        ? 'px-3 py-1 bg-white shadow-sm rounded-full text-xs font-bold border border-slate-200 animate-success text-slate-800'
                                        : 'p-2 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded text-sm text-center text-slate-800 dark:text-slate-200'
                                    }
                                `}>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- 6. WORD SELECT ---
export const WordSelectInteraction: React.FC<InteractionProps> = ({ question, value, onChange, variant }) => {
    return <MCQInteraction question={question} value={value} onChange={onChange} variant={variant} isSubmitting={false} />;
};

// --- 7. REORDER (SequencerEngine) ---
export const ReorderInteraction: React.FC<InteractionProps> = ({ value, onChange, variant, isSubmitting }) => {
    const list: string[] = Array.isArray(value) ? value : [];

    const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        setDraggedIdx(index);
        e.dataTransfer.effectAllowed = "move";
    };

    const onDragOver = (index: number) => {
        if (draggedIdx === null || draggedIdx === index) return;
        const newList = [...list];
        const item = newList[draggedIdx];
        newList.splice(draggedIdx, 1);
        newList.splice(index, 0, item);
        setDraggedIdx(index);
        onChange(newList);
    };

    const onDragEnd = () => {
        setDraggedIdx(null);
    };

    if (list.length === 0) return <div className="p-4 text-center text-slate-400 font-bold">Loading items...</div>;

    return (
        <div className={`mt-6 w-full ${variant === 'junior' ? 'overflow-x-auto pb-4' : 'max-w-md mx-auto'}`}>
            <div className={`flex gap-3 ${variant === 'junior' ? 'flex-row min-w-max px-2' : 'flex-col'}`}>
                {list.map((item, idx) => (
                    <div 
                        key={idx} 
                        draggable={!isSubmitting}
                        onDragStart={(e) => onDragStart(e, idx)}
                        onDragOver={(e) => { e.preventDefault(); onDragOver(idx); }}
                        onDragEnd={onDragEnd}
                        className={`
                            relative flex items-center justify-center cursor-grab active:cursor-grabbing transition-all
                            ${variant === 'junior' 
                                ? 'bg-gradient-to-br from-pink-400 to-orange-400 text-white p-6 rounded-2xl w-40 h-32 shadow-lg border-b-4 border-orange-600 font-black text-center text-lg'
                                : 'bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-4 rounded-lg shadow-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-brand-300'
                            }
                            ${draggedIdx === idx ? 'opacity-50 scale-95' : 'opacity-100'}
                        `}
                    >
                        {variant === 'junior' && idx < list.length - 1 && (
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-orange-400 drop-shadow-md">
                                <div className="w-6 h-6 bg-orange-400 rounded-full" />
                            </div>
                        )}
                        {variant !== 'junior' && <GripHorizontal size={20} className="text-slate-400 mr-3" />}
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- 8. SELECTION GRID ---
export const SelectionGridInteraction: React.FC<InteractionProps> = ({ question, value, onChange, variant, isSubmitting }) => {
    const selected = Array.isArray(value) ? value : [];
    
    const toggle = (id: string) => {
        if (selected.includes(id)) {
            onChange(selected.filter((x: string) => x !== id));
        } else {
            onChange([...selected, id]);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-4 mt-6">
            {question.options?.map(opt => {
                const isActive = selected.includes(opt.id);
                return (
                    <button 
                        key={opt.id} 
                        onClick={() => toggle(opt.id)}
                        disabled={isSubmitting}
                        className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all relative
                            ${isActive 
                                ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 shadow-md scale-95' 
                                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-brand-300 hover:bg-slate-50 dark:hover:bg-slate-750'
                            }`}
                    >
                        {isActive && <div className="absolute top-2 right-2 bg-brand-500 text-white rounded-full p-0.5"><Check size={12} /></div>}
                        <div className="text-3xl">{opt.visual}</div>
                        <span className="font-bold">{opt.text}</span>
                    </button>
                )
            })}
        </div>
    );
};

// --- 9. DRAG TO SLOTS ---
export const DragToSlotsInteraction: React.FC<InteractionProps> = ({ question, value, onChange, variant, isSubmitting }) => {
    const slots = question.categories || []; 
    const options = question.options || [];
    const placement = value || {};

    const handlePlace = (optionId: string) => {
        const emptySlot = slots.find(s => !placement[s.id]);
        if (emptySlot) {
            onChange({ ...placement, [emptySlot.id]: optionId });
        }
    };

    const handleRemove = (slotId: string) => {
        const newPlacement = { ...placement };
        delete newPlacement[slotId];
        onChange(newPlacement);
    };

    return (
        <div className="flex flex-col gap-8 mt-6">
            <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
                {slots.map(slot => {
                    const filledOptionId = placement[slot.id];
                    const filledOption = options.find(o => o.id === filledOptionId);
                    
                    return (
                        <div key={slot.id} className="flex flex-col items-center gap-2">
                             <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{slot.label}</div>
                             <button 
                                onClick={() => filledOption && handleRemove(slot.id)}
                                disabled={isSubmitting}
                                className={`w-16 h-20 md:w-20 md:h-24 rounded-xl border-2 border-dashed flex items-center justify-center font-black text-3xl transition-all
                                    ${filledOption 
                                        ? 'bg-brand-500 text-white border-brand-600 shadow-lg scale-100' 
                                        : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-400'}
                                `}
                             >
                                 {filledOption ? filledOption.text : '?'}
                             </button>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-wrap justify-center gap-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                {options.map(opt => {
                    const isUsed = Object.values(placement).includes(opt.id);
                    return (
                        <button 
                            key={opt.id}
                            onClick={() => !isUsed && handlePlace(opt.id)}
                            disabled={isUsed || isSubmitting}
                            className={`w-14 h-14 rounded-lg font-bold text-xl shadow-sm border-b-4 transition-all
                                ${isUsed 
                                    ? 'opacity-20 bg-slate-200 border-slate-300 cursor-default' 
                                    : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white border-slate-200 dark:border-slate-900 hover:-translate-y-1 active:scale-95'}
                            `}
                        >
                            {opt.text}
                        </button>
                    )
                })}
                <button onClick={() => onChange({})} className="ml-auto p-2 text-slate-400 hover:text-red-500"><RotateCcw size={20}/></button>
            </div>
        </div>
    );
};

// --- 10. OBJECT ARITHMETIC ---
export const ObjectArithmeticInteraction: React.FC<InteractionProps> = ({ question, value, onChange, variant, isSubmitting }) => {
    const total = Number(question.options?.find(o => o.id === 'total')?.text) || 12;
    const activeIndices: number[] = Array.isArray(value) ? value : Array.from({ length: total }, (_, i) => i);
    
    const toggleItem = (idx: number) => {
        if (activeIndices.includes(idx)) {
            onChange(activeIndices.filter(i => i !== idx));
        } else {
            onChange([...activeIndices, idx]);
        }
    };

    const items = Array.from({ length: total });
    
    return (
        <div className="mt-6 flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
            {items.map((_, i) => (
                <button 
                    key={i} 
                    onClick={() => toggleItem(i)}
                    disabled={isSubmitting}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl transition-all duration-300 transform
                        ${activeIndices.includes(i) 
                            ? 'scale-100 opacity-100 bg-red-100 hover:bg-red-200 border-2 border-red-200 shadow-md' 
                            : 'scale-90 opacity-40 grayscale bg-slate-200 dark:bg-slate-700 border-2 border-transparent inset-shadow'}
                    `}
                >
                    🍎
                </button>
            ))}
            <div className="w-full text-center mt-4 font-bold text-slate-500">
                {activeIndices.length} items left
            </div>
        </div>
    );
};

// --- 11. COIN BUILDER ---
export const CoinBuilderInteraction: React.FC<InteractionProps> = ({ value, onChange, isSubmitting }) => {
    const currentSum = Number(value) || 0;
    
    const addCoin = (amount: number) => onChange(currentSum + amount);
    const reset = () => onChange(0);

    return (
        <div className="mt-6 flex flex-col items-center gap-8">
            <div className="text-6xl font-black text-brand-600 font-mono bg-white dark:bg-slate-800 dark:text-brand-400 px-8 py-4 rounded-2xl shadow-inner border-2 border-slate-100 dark:border-slate-700">
                ₹{currentSum}
            </div>
            
            <div className="flex gap-4">
                {[1, 2, 5, 10].map(amt => (
                    <button 
                        key={amt} 
                        onClick={() => addCoin(amt)}
                        disabled={isSubmitting}
                        className="w-20 h-20 rounded-full bg-yellow-400 border-b-4 border-yellow-600 text-yellow-900 font-bold text-xl shadow-lg active:scale-95 flex items-center justify-center hover:brightness-110"
                    >
                        ₹{amt}
                    </button>
                ))}
            </div>
            <button onClick={reset} disabled={isSubmitting} className="text-sm font-bold text-slate-400 hover:text-red-500 flex items-center gap-1"><RotateCcw size={14}/> Reset</button>
        </div>
    );
};

// --- 12. CLOCK BUILDER ---
export const ClockBuilderInteraction: React.FC<InteractionProps> = ({ value, onChange, isSubmitting }) => {
    const safeVal = (typeof value === 'string' && value.includes(':')) ? value : "12:00";
    const [rawH, rawM] = safeVal.split(':').map(Number);
    const h = Number.isNaN(rawH) ? 12 : rawH;
    const m = Number.isNaN(rawM) ? 0 : rawM;

    const updateTime = (newH: number, newM: number) => {
        onChange(`${newH}:${newM.toString().padStart(2, '0')}`);
    };

    return (
        <div className="mt-6 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full border-8 border-slate-700 bg-white relative shadow-2xl mb-8">
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-slate-800 rounded-full -translate-x-1/2 -translate-y-1/2 z-20"></div>
                
                <div 
                    className="absolute top-1/2 left-1/2 w-1.5 h-12 bg-slate-800 origin-bottom -translate-x-1/2 -translate-y-full rounded-full z-10 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-50%) translateY(-100%) rotate(${(h % 12) * 30 + m * 0.5}deg)` }}
                ></div>
                
                <div 
                    className="absolute top-1/2 left-1/2 w-1 h-16 bg-brand-500 origin-bottom -translate-x-1/2 -translate-y-full rounded-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-50%) translateY(-100%) rotate(${m * 6}deg)` }}
                ></div>

                {[...Array(12)].map((_, i) => (
                    <div key={i} className="absolute w-1 h-3 bg-slate-300 left-1/2 origin-bottom -translate-x-1/2" style={{ top: '10px', height: '90px', transform: `translateX(-50%) rotate(${i * 30}deg)` }}>
                        <div className="w-full h-2 bg-slate-400 absolute top-0"></div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                 <div className="flex flex-col items-center">
                     <button onClick={() => updateTime(h === 12 ? 1 : h + 1, m)} disabled={isSubmitting} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-300"><Plus size={16}/></button>
                     <span className="text-2xl font-bold font-mono w-12 text-center text-slate-800 dark:text-white">{h}</span>
                     <button onClick={() => updateTime(h === 1 ? 12 : h - 1, m)} disabled={isSubmitting} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-300"><Minus size={16}/></button>
                 </div>
                 <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">:</span>
                 <div className="flex flex-col items-center">
                     <button onClick={() => updateTime(h, (m + 5) % 60)} disabled={isSubmitting} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-300"><Plus size={16}/></button>
                     <span className="text-2xl font-bold font-mono w-12 text-center text-slate-800 dark:text-white">{m.toString().padStart(2, '0')}</span>
                     <button onClick={() => updateTime(h, (m - 5 + 60) % 60)} disabled={isSubmitting} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-300"><Minus size={16}/></button>
                 </div>
            </div>
        </div>
    );
};

// --- 13. PATTERN BUILDER ---
export const PatternBuilderInteraction: React.FC<InteractionProps> = ({ question, value, onChange }) => {
    const sequence = question.options?.find(o => o.id === 'config')?.text.split(',') || [];
    
    return (
        <div className="mt-8 flex flex-col items-center w-full">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
                {sequence.map((item, i) => (
                    <div key={i} className="w-16 h-16 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-sm">
                        {item}
                    </div>
                ))}
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border-2 border-brand-500 border-dashed rounded-lg flex items-center justify-center font-bold text-2xl animate-pulse">
                    ?
                </div>
            </div>
            <InputInteraction question={question} value={value} onChange={onChange} variant="junior" isSubmitting={false} />
        </div>
    );
};

// --- 14. MATCHING PAIRS ---
export const MatchingInteraction: React.FC<InteractionProps> = ({ question, value, onChange, variant, isSubmitting }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const matched = (Array.isArray(value) ? value : []) as string[];

    const [items, setItems] = useState<QuestionOption[]>([]);

    useEffect(() => {
        if (question.options) {
            setItems([...question.options].sort(() => Math.random() - 0.5));
        }
    }, [question]);

    const handleSelect = (id: string) => {
        if (matched.includes(id)) return;

        if (!selected) {
            setSelected(id);
        } else if (selected === id) {
            setSelected(null); 
        } else {
            try {
                const pairs = JSON.parse(question.correctAnswer as string);
                const isPair = pairs[selected] === id || pairs[id] === selected;
                
                if (isPair) {
                    onChange([...matched, selected, id]);
                    setSelected(null);
                } else {
                    setSelected(id);
                }
            } catch (e) { console.error("Matching parse error", e); }
        }
    };

    return (
        <div className="grid grid-cols-2 gap-4 mt-6">
            {items.map(item => {
                const isMatched = matched.includes(item.id);
                const isSelected = selected === item.id;
                
                return (
                    <button
                        key={item.id}
                        onClick={() => handleSelect(item.id)}
                        disabled={isMatched || isSubmitting}
                        className={`p-6 rounded-xl border-b-4 font-bold text-lg transition-all transform
                            ${isMatched 
                                ? 'bg-green-100 border-green-300 text-green-700 opacity-50 scale-95 cursor-default' 
                                : isSelected 
                                    ? 'bg-brand-100 dark:bg-brand-900/50 border-brand-400 text-brand-700 dark:text-brand-200 -translate-y-1 shadow-lg ring-2 ring-brand-200'
                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 active:scale-95'
                            }
                        `}
                    >
                        {isMatched && <Check size={20} className="mx-auto mb-1" />}
                        {item.text}
                    </button>
                )
            })}
        </div>
    );
};

// --- 15. LOCATOR ENGINE ---
export const LocatorInteraction: React.FC<InteractionProps> = ({ question, value, onChange, variant, isSubmitting }) => {
    const hotspots = question.options?.filter(o => o.hotspot) || [];
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent, hotspot: QuestionOption) => {
        e.stopPropagation();
        if (isSubmitting) return;
        
        if (variant === 'junior') {
            spawnConfetti(e.clientX, e.clientY);
            onChange(hotspot.id);
        } else {
            onChange(hotspot.id);
        }
    };

    return (
        <div className="mt-6 flex flex-col items-center w-full">
            {variant === 'junior' && (
                <div className="mb-4 text-lg font-black text-brand-500 animate-bounce">
                    <Search className="inline mr-2"/> Find: <span className="text-slate-700 dark:text-white">{question.explanation.split('.')[0]}</span>
                </div>
            )}
            
            <div 
                ref={containerRef}
                className="relative w-full max-w-lg rounded-xl overflow-hidden border-4 border-slate-200 dark:border-slate-700 shadow-xl cursor-crosshair bg-slate-100"
            >
                <img 
                    src={question.backgroundImage || "https://placehold.co/600x400/png?text=Map+Image"} 
                    alt="Locator" 
                    className="w-full h-auto object-cover pointer-events-none select-none"
                />
                
                {hotspots.map(spot => {
                    if (!spot.hotspot) return null;
                    const isActive = value === spot.id;
                    
                    return (
                        <div
                            key={spot.id}
                            onClick={(e) => handleClick(e, spot)}
                            className={`absolute transition-all duration-300
                                ${variant === 'junior' && !isActive ? 'opacity-0 hover:opacity-10' : ''}
                                ${variant === 'senior' && !isActive ? 'opacity-0 hover:bg-brand-500/20 hover:border-2 hover:border-brand-500' : ''}
                                ${isActive ? 'bg-green-500/30 border-4 border-green-400 opacity-100' : ''}
                            `}
                            style={{
                                left: `${spot.hotspot.x}%`,
                                top: `${spot.hotspot.y}%`,
                                width: `${spot.hotspot.w}%`,
                                height: `${spot.hotspot.h}%`,
                                borderRadius: variant === 'junior' ? '50%' : '4px'
                            }}
                        >
                            {variant !== 'junior' && isActive && (
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none">
                                    {spot.text}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {variant !== 'junior' && <div className="mt-2 text-xs text-slate-400">Click on the diagram to identify parts.</div>}
        </div>
    );
};

// --- 16. EXPORT MAPPINGS ---
export const TimelineInteraction = ReorderInteraction;
export const WeightBalanceInteraction = MCQInteraction;
