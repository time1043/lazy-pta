import path from "path";
import { queGetClFile, queGetFile } from "./lib/constants/file";
import { ProblemType } from "./lib/types/url";
import { checkDir } from "./lib/utils/data-dir";
import { queMd } from "./step/clean/question.md";
import { queClean } from "./step/clean/question-get.clean";

// without get, only clean
// It exists question-get.json, then generate question-get-clean.json
export async function questionGetClean(qtPaths: string[]) {
  for (const qtPath of qtPaths) {
    const problemType = path.basename(qtPath) as ProblemType;

    // if qtPath satisfies the conditions
    // clean question and md question
    if (await checkDir(qtPath, { in: [queGetFile], ex: [queGetClFile] })) {
      await queClean(qtPath, problemType);
      await queMd(qtPath, problemType);
    }
  }
}

// TODO
export async function answerGetClean(qtPaths: string[]) {
  for (const qtPath of qtPaths) {
    const problemType = path.basename(qtPath) as ProblemType;

    switch (problemType) {
      case "MULTIPLE_CHOICE":
        console.log(qtPath);
        break;
      case "MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER":
        break;
      case "TRUE_OR_FALSE":
        break;
      case "FILL_IN_THE_BLANK":
        break;

      case "SUBJECTIVE":
        break;
      // sql must be before programming
      case "SQL_PROGRAMMING":
        break;
      case "PROGRAMMING":
        break;

      default:
        break;
    }
  }
}
