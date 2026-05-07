import path from 'path';

import type { AnswerAiSingle, AnswerAiMultiple, AnswerAiProgramming } from '@/libs/types/answer-ai';

import { answerAiFilename, answerAiSubmitFilename } from '@/libs/constants/file';
import { ProblemType } from '@/libs/types/problem-type';
import { readJson, writeJson } from '@/libs/utils/file-io';

export async function answerAiSubmit(dirPath: string, problemType: ProblemType) {
  const answerAiPath = path.join(dirPath, answerAiFilename);
  const answerAiSubmitPath = path.join(dirPath, answerAiSubmitFilename);
  const answerAiData = await readJson<any[]>(answerAiPath);
  if (!answerAiData) return;

  let submitData: any;

  switch (problemType) {
    case 'MULTIPLE_CHOICE':
      submitData = singleSubmit(problemType, answerAiData as AnswerAiSingle[]);
      break;
    case 'MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER':
      submitData = multipleSubmit(problemType, answerAiData as AnswerAiMultiple[]);
      break;
    case 'TRUE_OR_FALSE':
      submitData = singleSubmit(problemType, answerAiData as AnswerAiSingle[]);
      break;
    case 'FILL_IN_THE_BLANK':
      submitData = fillSubmit(answerAiData as AnswerAiMultiple[]);
      break;
    case 'PROGRAMMING':
      submitData = programmingSubmit('PROGRAMMING', answerAiData as AnswerAiProgramming[]);
      break;
    case 'SQL_PROGRAMMING':
      submitData = programmingSubmit('SQL_PROGRAMMING', answerAiData as AnswerAiProgramming[]);
      break;
    case 'SUBJECTIVE':
      submitData = singleSubmit('SUBJECTIVE', answerAiData as AnswerAiSingle[]);
      break;
    default:
      console.log(`[answerAiClean] unsupported problemType: ${problemType}`);
      return;
  }

  await writeJson(submitData, answerAiSubmitPath);
}

function singleSubmit(
  problemType: 'MULTIPLE_CHOICE' | 'TRUE_OR_FALSE' | 'SUBJECTIVE',
  data: AnswerAiSingle[],
) {
  return {
    problemType,
    details: data.map((a) => ({
      problemId: '0',
      problemSetProblemId: a.id,
      ...buildSingleDetail(problemType, a.answer),
    })),
  };
}

function buildSingleDetail(problemType: string, answer: string) {
  switch (problemType) {
    case 'MULTIPLE_CHOICE':
      return { multipleChoiceSubmissionDetail: { answer } };
    case 'TRUE_OR_FALSE':
      return { trueOrFalseSubmissionDetail: { answer } };
    case 'SUBJECTIVE':
      return { subjectiveSubmissionDetail: { answer } };
  }
}

function multipleSubmit(
  problemType: 'MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER',
  data: AnswerAiMultiple[],
) {
  return {
    problemType,
    details: data.map((a) => ({
      problemId: '0',
      problemSetProblemId: a.id,
      multipleChoiceMoreThanOneAnswerSubmissionDetail: { answers: a.answers },
    })),
  };
}

function fillSubmit(data: AnswerAiMultiple[]) {
  return {
    problemType: 'FILL_IN_THE_BLANK',
    details: data.map((a) => ({
      problemId: '0',
      problemSetProblemId: a.id,
      fillInTheBlankSubmissionDetail: { answers: a.answers },
    })),
  };
}

function programmingSubmit(
  problemType: 'PROGRAMMING' | 'SQL_PROGRAMMING',
  data: AnswerAiProgramming[],
) {
  return data.map((a) => ({
    problemType,
    details: [
      {
        problemId: '0',
        problemSetProblemId: a.id,
        ...buildProgrammingDetail(problemType, a.answer),
      },
    ],
  }));
}

function buildProgrammingDetail(problemType: string, program: string) {
  switch (problemType) {
    case 'PROGRAMMING':
      return { programmingSubmissionDetail: { program } };
    case 'SQL_PROGRAMMING':
      return { sqlProgrammingSubmissionDetail: { program } };
  }
}
