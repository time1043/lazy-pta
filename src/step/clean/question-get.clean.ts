import { queGetClFile, queGetFile } from "@/lib/constants/file";
import {
  QueFill,
  QueMultiple,
  QueProgramming,
  QueSingle,
  QueSql,
  QueTf,
} from "@/lib/types/question";
import {
  QueFillGet,
  QueMultipleGet,
  QueProgrammingListGet,
  QueSingleGet,
  QueSqlListGet,
  QueSubjectiveListGet,
  QueTfGet,
} from "@/lib/types/question-get";
import { ProblemType } from "@/lib/types/url";
import { readJson, writeJson } from "@/lib/utils/file-io";
import { withClean } from "@/lib/utils/text";
import path from "path";

export async function queClean(dirPath: string, problemType: ProblemType) {
  const { queGetData, queGetCleanPath } = await getMeta(dirPath);
  let queGetCleanData: any[] = [];

  switch (problemType) {
    case "MULTIPLE_CHOICE":
      queGetCleanData = await queSingleClean(queGetData);
      break;
    case "MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER":
      queGetCleanData = await queMultipleClean(queGetData);
      break;
    case "TRUE_OR_FALSE":
      queGetCleanData = await queTfClean(queGetData);
      break;
    case "FILL_IN_THE_BLANK":
      queGetCleanData = await queFillClean(queGetData);
      break;

    case "SUBJECTIVE":
      queGetCleanData = await queSubjectiveListClean(queGetData);
      break;
    case "SQL_PROGRAMMING":
      queGetCleanData = await queSqlListClean(queGetData);
      break;
    case "PROGRAMMING":
      queGetCleanData = await queProgrammingListClean(queGetData);
      break;
    default:
      break;
  }

  await writeJson(queGetCleanData, queGetCleanPath);
}

async function getMeta(dirPath: string) {
  // queGetPath -> queGetData ---> queGetCleanData
  // queGetCleanPath
  const queGetPath = path.join(dirPath, queGetFile);
  const queGetCleanPath = path.join(dirPath, queGetClFile);
  const queGetData = await readJson(queGetPath);
  return { queGetData, queGetCleanPath };
}

export async function queSingleClean(
  queGetData: QueSingleGet
): Promise<QueSingle[]> {
  const queGetCleanData = queGetData.problemSetProblems.map((problem) => {
    // get fields
    const { id, description: des } = problem;
    const { choices: cho } = problem.problemConfig.multipleChoiceProblemConfig;
    // transform image url
    const description = withClean(des);
    const choices = cho.map(withClean);
    // return item
    return { id, description, choices };
  });
  return queGetCleanData;
}

export async function queMultipleClean(
  queGetData: QueMultipleGet
): Promise<QueMultiple[]> {
  const queGetCleanData = queGetData.problemSetProblems.map((problem) => {
    // get fields
    const { id, description: des } = problem;
    const { choices: cho } =
      problem.problemConfig.multipleChoiceMoreThanOneAnswerProblemConfig;
    // transform image url
    const description = withClean(des);
    const choices = cho.map(withClean);
    // return item
    return { id, description, choices };
  });
  return queGetCleanData;
}

export async function queTfClean(queGetData: QueTfGet): Promise<QueTf[]> {
  const queGetCleanData = queGetData.problemSetProblems.map((problem) => {
    // get fields
    const { id, description: des } = problem;
    // transform image url
    const description = withClean(des);
    // return item
    return { id, description };
  });
  return queGetCleanData;
}

export async function queFillClean(queGetData: QueFillGet): Promise<QueFill[]> {
  const queGetCleanData = queGetData.problemSetProblems.map((problem) => {
    // get fields
    const { id, description: des, problemConfig } = problem;
    const { scores, blankLength, blanks } =
      problemConfig.fillInTheBlankProblemConfig;
    // transform image url
    // const description = withClean(des);
    const description = des;
    // return item
    return { id, description, scores, blankLength, blanks };
  });
  return queGetCleanData;
}

export async function queSubjectiveListClean(
  queGetData: QueSubjectiveListGet
): Promise<QueTf[]> {
  const queGetCleanData = queGetData.map((problem) => {
    // get fields
    const { id, description: des } = problem.problemSetProblem;
    // transform image url
    const description = withClean(des);
    // return item
    return { id, description };
  });
  return queGetCleanData;
}

export async function queSqlListClean(
  queGetData: QueSqlListGet
): Promise<QueSql[]> {
  const queGetCleanData = queGetData.map((problem) => {
    // get fields
    const { id, description: des, problemConfig } = problem.problemSetProblem;
    const { dialect } = problemConfig.sqlProgrammingProblemConfig;
    // transform image url
    const description = withClean(des);
    // return item
    return { id, description, dialect };
  });
  return queGetCleanData;
}

export async function queProgrammingListClean(
  queGetData: QueProgrammingListGet
): Promise<QueProgramming[]> {
  const queGetCleanData = queGetData.map((problem) => {
    // get fields
    const { id, description: des, problemConfig } = problem.problemSetProblem;
    const { exampleTestDatas } = problemConfig.programmingProblemConfig;
    // transform image url
    const description = withClean(des);
    // return item
    return { id, description, exampleTestDatas };
  });
  return queGetCleanData;
}
