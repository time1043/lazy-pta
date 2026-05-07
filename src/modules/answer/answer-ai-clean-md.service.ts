import path from 'path';

import type { AnswerStatus } from '@/libs/types/answer-ai';
import type { FillInTheBlank, MultipleChoice } from '@/libs/types/question';

import {
  answerAiFilename,
  answerAiMdFilename,
  questionAnswerAiMdFilename,
  questionGetCleanFilename,
} from '@/libs/constants/file';
import { statusMap } from '@/libs/types/answer-ai';
import { ProblemType } from '@/libs/types/problem-type';
import { readJson, writeMd } from '@/libs/utils/file-io';

export async function answerAiCleanMd(dirPath: string, problemType: ProblemType) {
  const answerAiPath = path.join(dirPath, answerAiFilename);
  const answerAiData = await readJson<any[]>(answerAiPath);
  if (!answerAiData) return;

  const parts = answerParts(answerAiData, problemType);
  const answerAiMdPath = path.join(dirPath, answerAiMdFilename);
  await writeMd(parts.join(''), answerAiMdPath);
}

export async function questionAnswerAiCleanMd(dirPath: string, problemType: ProblemType) {
  const questionGetCleanPath = path.join(dirPath, questionGetCleanFilename);
  const answerAiPath = path.join(dirPath, answerAiFilename);

  const questionData = await readJson<any[]>(questionGetCleanPath);
  const answerData = await readJson<any[]>(answerAiPath);
  if (!questionData || !answerData) return;

  const parts = questionAnswerParts(questionData, answerData, problemType);
  const qaMdPath = path.join(dirPath, questionAnswerAiMdFilename);
  await writeMd(parts.join(''), qaMdPath);
}

function answerParts(data: any[], problemType: ProblemType): string[] {
  return data.map((a, index) => {
    const status = statusMap[a.status as AnswerStatus] ?? statusMap['UNKNOWN'];
    const answerText = formatAnswer(a, problemType);
    return `## ${index + 1}.\n\n### Answer ${status}\n\n${answerText}\n\n`;
  });
}

function formatAnswer(a: any, problemType: ProblemType): string {
  switch (problemType) {
    case 'MULTIPLE_CHOICE':
    case 'MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER':
    case 'TRUE_OR_FALSE':
    case 'SUBJECTIVE':
      return a.answer;
    case 'FILL_IN_THE_BLANK':
      return (a.answers as string[]).join('\n');
    case 'PROGRAMMING':
    case 'SQL_PROGRAMMING':
      return `\`\`\`${a.lang}\n${a.program}\n\`\`\``;
    default:
      return '';
  }
}

function questionAnswerParts(
  questionData: any[],
  answerData: any[],
  problemType: ProblemType,
): string[] {
  return questionData.map((q, index) => {
    const questionMd = formatQuestion(q, index, problemType);
    const a = answerData[index];
    const status = statusMap[a.status as AnswerStatus] ?? statusMap['UNKNOWN'];
    const answerText = formatAnswer(a, problemType);
    return `${questionMd}### Answer ${status}\n\n${answerText}\n\n`;
  });
}

function formatQuestion(q: any, index: number, problemType: ProblemType): string {
  switch (problemType) {
    case 'MULTIPLE_CHOICE':
    case 'MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER':
      return multipleChoiceQuestionMd(q, index);
    case 'FILL_IN_THE_BLANK':
      return fillInTheBlankQuestionMd(q, index);
    default:
      return `## ${index + 1}.\n\n${q.description}\n\n`;
  }
}

function multipleChoiceQuestionMd(q: MultipleChoice, index: number): string {
  const choicesText = q.choices.map((choice, i) => {
    const letter = String.fromCharCode(65 + i);
    return `${letter}.\n${choice}\n\n`;
  });
  return `## ${index + 1}.\n\n${q.description}\n\n${choicesText.join('')}`;
}

function fillInTheBlankQuestionMd(q: FillInTheBlank, index: number): string {
  const { description, blanks } = q;
  const blanksOrder = blanks.map((b, idx) => ({ ...b, order: idx + 1 }));
  const blanksSorted = [...blanksOrder].sort((a, b) => b.order - a.order);

  let result = description;
  blanksSorted.forEach((b) => {
    const placeholder = `\\_\\_(${b.order})\\_\\_`;
    result = result.substring(0, b.index) + placeholder + result.substring(b.index);
  });
  return `## ${index + 1}.\n\n${result}\n\n`;
}
