import path from 'path';

import type { ProblemType } from '@/libs/types/problem-type';

import { answerAiFilename, answerAiSubmitFilename } from '@/libs/constants/file';
import { readJson, writeJson } from '@/libs/utils/file-io';

export async function answerAiSubmit(dirPath: string, problemType: ProblemType) {
  const answerAiPath = path.join(dirPath, answerAiFilename);
  const answerAiSubmitPath = path.join(dirPath, answerAiSubmitFilename);
  const data = await readJson<any[]>(answerAiPath);
  if (!data) return;

  const submitData = {
    problemType,
    details: data.map((a) => ({
      problemId: '0' as const,
      problemSetProblemId: a.id,
      ...buildDetail(problemType, a),
    })),
  };

  await writeJson(submitData, answerAiSubmitPath);
}

function buildDetail(problemType: ProblemType, a: any) {
  switch (problemType) {
    case 'MULTIPLE_CHOICE':
      return { multipleChoiceSubmissionDetail: { answer: a.answer } };
    case 'MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER':
      return { multipleChoiceMoreThanOneAnswerSubmissionDetail: { answers: a.answers } };
    case 'TRUE_OR_FALSE':
      return { trueOrFalseSubmissionDetail: { answer: a.answer } };
    case 'FILL_IN_THE_BLANK':
      return { fillInTheBlankSubmissionDetail: { answers: a.answers } };
    case 'PROGRAMMING':
      return { programmingSubmissionDetail: { program: a.answer, compiler: 'PYTHON3' } };
    case 'SQL_PROGRAMMING':
      return { sqlProgrammingSubmissionDetail: { program: a.answer } };
    case 'SUBJECTIVE':
      return { subjectiveSubmissionDetail: { answer: a.answer } };
  }
}
