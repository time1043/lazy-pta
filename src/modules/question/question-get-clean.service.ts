import path from 'path';

import type {
  MultipleChoice,
  TrueOrFalse,
  FillInTheBlank,
  IdsProgramming,
  IdsSql,
  IdsSubjective,
} from '@/libs/types/question';
import type {
  MultipleChoiceGet,
  MultipleChoiceMoreThanOneAnswerGet,
  TrueOrFalseGet,
  FillInTheBlankGet,
  IdsProgrammingGet,
  IdsSqlGet,
  IdsSubjectiveGet,
} from '@/libs/types/question-get';

import { questionGetFilename, questionGetCleanFilename } from '@/libs/constants/file';
import { ProblemType } from '@/libs/types/problem-type';
import { readJson, writeJson } from '@/libs/utils/file-io';
import { withClean } from '@/libs/utils/text';

export async function questionGetClean(dirPath: string, problemType: ProblemType) {
  const questionGetPath = path.join(dirPath, questionGetFilename);
  const questionGetCleanPath = path.join(dirPath, questionGetCleanFilename);
  const questionGetData = await readJson(questionGetPath);
  if (!questionGetData) return;

  let questionGetCleanData: any[] = [];

  switch (problemType) {
    case 'MULTIPLE_CHOICE':
      questionGetCleanData = multipleChoiceClean(questionGetData as MultipleChoiceGet);
      break;
    case 'MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER':
      questionGetCleanData = multipleChoiceMoreThanOneAnswerClean(
        questionGetData as MultipleChoiceMoreThanOneAnswerGet,
      );
      break;
    case 'TRUE_OR_FALSE':
      questionGetCleanData = trueOrFalseClean(questionGetData as TrueOrFalseGet);
      break;
    case 'FILL_IN_THE_BLANK':
      questionGetCleanData = fillInTheBlankClean(questionGetData as FillInTheBlankGet);
      break;
    case 'PROGRAMMING':
      questionGetCleanData = idsProgrammingClean(questionGetData as IdsProgrammingGet);
      break;
    case 'SQL_PROGRAMMING':
      questionGetCleanData = idsSqlClean(questionGetData as IdsSqlGet);
      break;
    case 'SUBJECTIVE':
      questionGetCleanData = idsSubjectiveClean(questionGetData as IdsSubjectiveGet);
      break;
    default:
      console.log(`[questionClean] unsupported problemType: ${problemType}`);
      return;
  }

  await writeJson(questionGetCleanData, questionGetCleanPath);
}

function multipleChoiceClean(data: MultipleChoiceGet): MultipleChoice[] {
  return data.problemSetProblems.map((problem) => ({
    id: problem.id,
    description: withClean(problem.description),
    choices: problem.problemConfig.multipleChoiceProblemConfig.choices.map(withClean),
  }));
}

function multipleChoiceMoreThanOneAnswerClean(
  data: MultipleChoiceMoreThanOneAnswerGet,
): MultipleChoice[] {
  return data.problemSetProblems.map((problem) => ({
    id: problem.id,
    description: withClean(problem.description),
    choices:
      problem.problemConfig.multipleChoiceMoreThanOneAnswerProblemConfig.choices.map(withClean),
  }));
}

function trueOrFalseClean(data: TrueOrFalseGet): TrueOrFalse[] {
  return data.problemSetProblems.map((problem) => ({
    id: problem.id,
    description: withClean(problem.description),
  }));
}

function fillInTheBlankClean(data: FillInTheBlankGet): FillInTheBlank[] {
  return data.problemSetProblems.map((problem) => ({
    id: problem.id,
    description: problem.description,
    ...problem.problemConfig.fillInTheBlankProblemConfig,
  }));
}

function idsProgrammingClean(data: IdsProgrammingGet): IdsProgramming[] {
  return data.map((problem) => ({
    id: problem.problemSetProblem.id,
    description: withClean(problem.problemSetProblem.description),
    exampleTestDatas:
      problem.problemSetProblem.problemConfig.programmingProblemConfig.exampleTestDatas,
  }));
}

function idsSqlClean(data: IdsSqlGet): IdsSql[] {
  return data.map((problem) => ({
    id: problem.problemSetProblem.id,
    description: withClean(problem.problemSetProblem.description),
    dialect: problem.problemSetProblem.problemConfig.sqlProgrammingProblemConfig.dialect,
  }));
}

function idsSubjectiveClean(data: IdsSubjectiveGet): IdsSubjective[] {
  return data.map((problem) => ({
    id: problem.problemSetProblem.id,
    description: withClean(problem.problemSetProblem.description),
  }));
}
