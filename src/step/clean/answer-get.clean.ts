import { ansGetClFile, ansGetFile } from "@/lib/constants/file";
import {
  AnsFill,
  AnsMultiple,
  AnsProgramming,
  AnsSingle,
  AnsSubjective,
  AnsTf,
  langMap,
} from "@/lib/types/answer";
import {
  AnsFillGet,
  AnsMultipleGet,
  AnsProgrammingListGet,
  AnsSingleGet,
  AnsSqlListGet,
  AnsSubjectiveListGet,
  AnsTfGet,
} from "@/lib/types/answer-get";
import { ProblemType } from "@/lib/types/url";
import { readJson, writeJson } from "@/lib/utils/file-io";
import path from "path";

export async function ansClean(dirPath: string, problemType: ProblemType) {
  const { ansGetData, ansGetCleanPath } = await getMeta(dirPath);
  let ansGetCleanData: any[] = [];

  switch (problemType) {
    case "MULTIPLE_CHOICE":
      ansGetCleanData = await ansSingleClean(ansGetData);
      break;
    case "MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER":
      ansGetCleanData = await ansMultipleClean(ansGetData);
      break;
    case "TRUE_OR_FALSE":
      ansGetCleanData = await ansTfClean(ansGetData);
      break;
    case "FILL_IN_THE_BLANK":
      ansGetCleanData = await ansFillClean(ansGetData);
      break;

    case "SUBJECTIVE":
      ansGetCleanData = await ansSubjectiveListClean(ansGetData);
      break;
    case "SQL_PROGRAMMING":
      ansGetCleanData = await ansSqlListClean(ansGetData);
      break;
    case "PROGRAMMING":
      ansGetCleanData = await ansProgrammingListClean(ansGetData);
      break;
    default:
      break;
  }

  await writeJson(ansGetCleanPath, ansGetCleanData);
}

async function getMeta(dirPath: string) {
  // ansGetPath -> ansGetData ---> ansGetCleanData
  // ansGetCleanPath
  const ansGetPath = path.join(dirPath, ansGetFile);
  const ansGetCleanPath = path.join(dirPath, ansGetClFile);
  const ansGetData = await readJson(ansGetPath);
  return { ansGetData, ansGetCleanPath };
}

export async function ansSingleClean(
  ansGetData: AnsSingleGet
): Promise<AnsSingle[]> {
  const ansGetCleanData = ansGetData.submission.submissionDetails.map((sub) => {
    // get fields
    const { problemSetProblemId } = sub;
    const { answer } = sub.multipleChoiceSubmissionDetail;
    // return item
    return { problemSetProblemId, answer };
  });
  return ansGetCleanData;
}

export async function ansMultipleClean(
  ansGetData: AnsMultipleGet
): Promise<AnsMultiple[]> {
  const ansGetCleanData = ansGetData.submission.submissionDetails.map((sub) => {
    // get fields
    const { problemSetProblemId } = sub;
    const { answers } = sub.multipleChoiceMoreThanOneAnswerSubmissionDetail;
    // return item
    return { problemSetProblemId, answers };
  });
  return ansGetCleanData;
}

export async function ansTfClean(ansGetData: AnsTfGet): Promise<AnsTf[]> {
  const ansGetCleanData = ansGetData.submission.submissionDetails.map((sub) => {
    // get fields
    const { problemSetProblemId } = sub;
    const { answer } = sub.trueOrFalseSubmissionDetail;
    // return item
    return { problemSetProblemId, answer };
  });
  return ansGetCleanData;
}

export async function ansFillClean(ansGetData: AnsFillGet): Promise<AnsFill[]> {
  const ansGetCleanData = ansGetData.submission.submissionDetails.map((sub) => {
    // get fields
    const { problemSetProblemId } = sub;
    const { answers } = sub.fillInTheBlankSubmissionDetail;
    // return item
    return { problemSetProblemId, answers };
  });
  return ansGetCleanData;
}

// //////////////////////////////////////////////////////////////////

export async function ansSubjectiveListClean(
  ansGetData: AnsSubjectiveListGet
): Promise<AnsSubjective[]> {
  const ansGetCleanData = ansGetData.map((sub) => {
    const s = sub.submission.submissionDetails[0];
    // get fields
    const { problemSetProblemId } = s;
    const { answer } = s.subjectiveSubmissionDetail;
    // return item
    return { problemSetProblemId, answer };
  });
  return ansGetCleanData;
}

export async function ansProgrammingListClean(
  ansGetData: AnsProgrammingListGet
): Promise<AnsProgramming[]> {
  const ansGetCleanData = ansGetData.map((sub) => {
    const s = sub.submission.submissionDetails[0];
    // get fields
    const { problemSetProblemId } = s;
    const { compiler, program } = s.programmingSubmissionDetail;
    // transform lang from compiler
    const lang = langMap[compiler];
    // return item
    return { problemSetProblemId, lang, program };
  });
  return ansGetCleanData;
}

export async function ansSqlListClean(
  ansGetData: AnsSqlListGet
): Promise<AnsProgramming[]> {
  const ansGetCleanData = ansGetData.map((sub) => {
    const s = sub.submission.submissionDetails[0];
    // get fields
    const { problemSetProblemId } = s;
    const { program } = s.sqlProgrammingSubmissionDetail;
    // transform lang from compiler
    const lang = langMap["MYSQL"];
    // return item
    return { problemSetProblemId, lang, program };
  });
  return ansGetCleanData;
}
