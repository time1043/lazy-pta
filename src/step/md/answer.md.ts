import { ansGetClFile } from "@/lib/constants/file";
import {
  AnsMultiple,
  AnsProgramming,
  AnsSingle,
  statusMap,
} from "@/lib/types/answer";
import { ProblemType } from "@/lib/types/url";
import { readJson, writeMd } from "@/lib/utils/file-io";
import path from "path";
import {
  getMeta as getMetaq,
  queFillMd,
  queSingleMd,
  queTfMd,
} from "./question.md";

type AnsMdData = { ansMdaData: any[]; ansMdqaData: any[] };

export async function ansMd(dirPath: string, problemType: ProblemType) {
  const { ansGetClData, ansMdPath } = await getMeta(dirPath, problemType);
  let ansMdData: AnsMdData = { ansMdaData: [], ansMdqaData: [] };
  let queMdData: any[] = [];

  // make sure that question-get-clean.json exists
  // it maybe not exists
  const { queGetClData, error } = await getMetaq(dirPath, problemType);
  if (error) return console.log("question-get-clean.json not exists");

  switch (problemType) {
    case "MULTIPLE_CHOICE":
      queMdData = await queSingleMd(queGetClData);
      ansMdData = await ansSingleMd(ansGetClData, queMdData);
      break;
    case "TRUE_OR_FALSE":
      queMdData = await queTfMd(queGetClData);
      ansMdData = await ansSingleMd(ansGetClData, queMdData);
      break;
    case "SUBJECTIVE":
      queMdData = await queTfMd(queGetClData);
      ansMdData = await ansSingleMd(ansGetClData, queMdData);
      break;

    case "MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER":
      queMdData = await queSingleMd(queGetClData);
      ansMdData = await ansMultipleMd(ansGetClData, queMdData);
      break;
    case "FILL_IN_THE_BLANK":
      queMdData = await queFillMd(queGetClData);
      ansMdData = await ansMultipleMd(ansGetClData, queMdData);
      break;

    case "SQL_PROGRAMMING":
    case "PROGRAMMING":
      queMdData = await queTfMd(queGetClData);
      ansMdData = await ansProgrammingMd(ansGetClData, queMdData);
      break;

    default:
      break;
  }

  const { ansMdaPath, ansMdqaPath } = ansMdPath;
  const { ansMdaData, ansMdqaData } = ansMdData;
  await writeMd(ansMdaData.join(""), ansMdaPath);
  await writeMd(ansMdqaData.join(""), ansMdqaPath);
}

async function getMeta(dirPath: string, problemType: ProblemType) {
  // ansGetCleanPath -> ansGetClData ---> ansMdaData/ansMdqaData
  // ansMdaPath/ansMdqaPath
  const ansGetCleanPath = path.join(dirPath, ansGetClFile);
  const ansMdaPath = path.join(dirPath, `${problemType}-a.md`);
  const ansMdqaPath = path.join(dirPath, `${problemType}-qa.md`);
  const ansGetClData = await readJson(ansGetCleanPath);

  const ansMdPath = { ansMdaPath, ansMdqaPath };
  return { ansGetClData, ansMdPath };
}

export async function ansSingleMd(
  ansGetCleanData: AnsSingle[],
  queMdData: string[]
) {
  const ans = ansGetCleanData.map((a) => {
    const status = statusMap[a.status];
    return `### Answer ${status}\n\n${a.answer}\n\n`;
  });
  const ansMdaData = ans.map((a, index) => `## ${index + 1}.\n\n${a}`);
  const ansMdqaData = queMdData.map((qMd, index) => qMd + ans[index]);
  return { ansMdaData, ansMdqaData };
}

export async function ansMultipleMd(
  ansGetCleanData: AnsMultiple[],
  queMdData: string[]
) {
  const ans = ansGetCleanData.map((a) => {
    const status = statusMap[a.status];
    return `### Answer ${status}\n\n${a.answers.join("\n")}\n\n`;
  });
  const ansMdaData = ans.map((a, index) => `## ${index + 1}.\n\n${a}`);
  const ansMdqaData = queMdData.map((qMd, index) => qMd + ans[index]);
  return { ansMdaData, ansMdqaData };
}

export async function ansProgrammingMd(
  ansGetCleanData: AnsProgramming[],
  queMdData: string[]
) {
  const ans = ansGetCleanData.map((a) => {
    const status = statusMap[a.status];
    const code = `\`\`\`${a.lang}\n ${a.program}\n\`\`\``;
    return `### Answer ${status}\n\n${code}\n\n`;
  });
  const ansMdaData = ans.map((a, index) => `## ${index + 1}.\n\n${a}`);
  const ansMdqaData = queMdData.map((qMd, index) => qMd + ans[index]);
  return { ansMdaData, ansMdqaData };
}
