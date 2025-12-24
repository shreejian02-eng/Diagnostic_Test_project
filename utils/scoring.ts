import { UserResponse, Analytics, Subject, Question } from '../types';

export const calculateAnalytics = (responses: UserResponse[], questions: Question[]): Analytics => {
  let score = 0;
  const bySubject = {
    [Subject.MATH]: { correct: 0, total: 0, percentage: 0 },
    [Subject.SCIENCE]: { correct: 0, total: 0, percentage: 0 },
    [Subject.ENGLISH]: { correct: 0, total: 0, percentage: 0 },
  };

  const skillPerformance: { [key: string]: { correct: number; total: number } } = {};

  responses.forEach(resp => {
    const question = questions.find(q => q.id === resp.questionId);
    if (!question) return;

    // By Subject
    bySubject[question.subject].total += 1;
    
    // By Skill
    if (!skillPerformance[question.skillTag]) {
      skillPerformance[question.skillTag] = { correct: 0, total: 0 };
    }
    skillPerformance[question.skillTag].total += 1;

    if (resp.isCorrect) {
      score += 1;
      bySubject[question.subject].correct += 1;
      skillPerformance[question.skillTag].correct += 1;
    }
  });

  // Calculate percentages
  Object.keys(bySubject).forEach(key => {
    const k = key as Subject;
    if (bySubject[k].total > 0) {
      bySubject[k].percentage = Math.round((bySubject[k].correct / bySubject[k].total) * 100);
    }
  });

  // Determine Weak/Strong Areas (Threshold: 50%)
  const strongAreas: string[] = [];
  const weakAreas: string[] = [];

  Object.entries(skillPerformance).forEach(([skill, stats]) => {
    const pct = stats.correct / stats.total;
    if (pct >= 0.75) strongAreas.push(skill);
    else if (pct < 0.5) weakAreas.push(skill);
  });

  return {
    score,
    totalQuestions: questions.length,
    bySubject,
    weakAreas: weakAreas.slice(0, 5), // Top 5
    strongAreas: strongAreas.slice(0, 5), // Top 5
  };
};