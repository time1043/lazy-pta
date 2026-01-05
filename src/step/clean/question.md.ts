import { queGetClFile } from "@/lib/constants/file";
import { QueChoices, QueFill, QueTf } from "@/lib/types/question";
import { ProblemType } from "@/lib/types/url";
import { readJson, writeMd } from "@/lib/utils/file-io";
import { withClean } from "@/lib/utils/text";
import path from "path";

export async function queMd(dirPath: string, problemType: ProblemType) {
  const { queGetCleanData, queMdPath } = await getMeta(dirPath, problemType);
  let queMdData: any[] = [];

  switch (problemType) {
    case "MULTIPLE_CHOICE":
    case "MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER":
      queMdData = await queSingleMd(queGetCleanData);
      break;
    case "FILL_IN_THE_BLANK":
      queMdData = await queFillMd(queGetCleanData);
      break;
    case "TRUE_OR_FALSE":
    case "SUBJECTIVE":
    case "SQL_PROGRAMMING":
    case "PROGRAMMING":
      queMdData = await queTfMd(queGetCleanData);
      break;

    default:
      break;
  }

  await writeMd(queMdPath, queMdData.join(""));
}

async function getMeta(dirPath: string, problemType: ProblemType) {
  // queGetCleanPath -> queGetCleanData ---> queMdData
  // queMdPath
  const queGetCleanPath = path.join(dirPath, queGetClFile);
  const queMdPath = path.join(dirPath, `${problemType}.md`);
  const queGetCleanData = await readJson(queGetCleanPath);
  return { queGetCleanData, queMdPath };
}

export async function queSingleMd(queGetCleanData: QueChoices[]) {
  const queMdData = queGetCleanData.map((q, index) => {
    const choicesText = q.choices.map((choice, i) => {
      const letter = String.fromCharCode(65 + i); // A, B, C, D...
      return `${letter}.${choice}\n\n`;
    });
    return `## ${index + 1}.\n\n${q.description}\n\n${choicesText.join("")}`;
  });
  return queMdData;
}

export async function queFillMd(queGetCleanData: QueFill[]) {
  const queMdData = queGetCleanData.map((q, index) => {
    const { description, blanks } = q;
    const blanksOrder = blanks.map((b, idx) => ({ ...b, order: idx + 1 }));
    // Sort by index from largest to smallest (replace from back to front, index will not be messed up)
    const blanksSorted = blanksOrder.sort((a, b) => b.order - a.order);

    let result = description;
    blanksSorted.forEach((b) => {
      const pos = b.index;
      const placeholder = `\\_\\_(${b.order})\\_\\_`;
      result = result.substring(0, pos) + placeholder + result.substring(pos);
    });
    // return `## ${index + 1}.\n\n${result}\n\n`;
    return `## ${index + 1}.\n\n${withClean(result)}\n\n`;
  });
  return queMdData;
}

export async function queTfMd(queGetCleanData: QueTf[]) {
  const queMdData = queGetCleanData.map((q, index) => {
    return `## ${index + 1}.\n\n${q.description}\n\n`;
  });
  return queMdData;
}
