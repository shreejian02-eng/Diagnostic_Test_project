import { Question } from './types';
import { GRADE_3_QUESTIONS } from './constants/grade3';
import { GRADE_4_QUESTIONS } from './constants/grade4';
import { GRADE_5_QUESTIONS } from './constants/grade5';
import { GRADE_6_QUESTIONS } from './constants/grade6';
import { GRADE_7_QUESTIONS } from './constants/grade7';
import { GRADE_8_QUESTIONS } from './constants/grade8';
import { GRADE_9_QUESTIONS } from './constants/grade9';
import { GRADE_10_QUESTIONS } from './constants/grade10';
import { GRADE_11_QUESTIONS } from './constants/grade11';
import { GRADE_12_QUESTIONS } from './constants/grade12';

export const getQuestionsForGrade = (grade: number): Question[] => {
  switch (grade) {
    case 3:
      return GRADE_3_QUESTIONS;
    case 4:
      return GRADE_4_QUESTIONS;
    case 5:
      return GRADE_5_QUESTIONS;
    case 6:
      return GRADE_6_QUESTIONS;
    case 7:
      return GRADE_7_QUESTIONS;
    case 8:
      return GRADE_8_QUESTIONS;
    case 9:
      return GRADE_9_QUESTIONS;
    case 10:
      return GRADE_10_QUESTIONS;
    case 11:
      return GRADE_11_QUESTIONS;
    case 12:
      return GRADE_12_QUESTIONS;
    default:
      // Fallback for grades less than 3 or greater than 12
      if (grade < 3) return GRADE_3_QUESTIONS;
      if (grade > 12) return GRADE_12_QUESTIONS;
      return []; // Should not happen with current UI
  }
};
