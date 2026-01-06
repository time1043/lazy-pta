import path from "path";
import {
  ansGetClFile,
  ansGetFile,
  queGetClFile,
  queGetFile,
} from "./lib/constants/file";
import { ProblemType } from "./lib/types/url";
import { checkDir } from "./lib/utils/data-dir";
import { ansClean } from "./step/clean/answer-get.clean";
import { queClean } from "./step/clean/question-get.clean";
import { ansMd } from "./step/md/answer.md";
import { queMd } from "./step/md/question.md";

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

// without get, only clean
// It exists answer-get.json, then generate answer-get-clean.json and answer-get-clean-ai.json
export async function answerGetClean(qtPaths: string[]) {
  for (const qtPath of qtPaths) {
    const problemType = path.basename(qtPath) as ProblemType;

    if (await checkDir(qtPath, { in: [ansGetFile], ex: [ansGetClFile] })) {
      await ansClean(qtPath, problemType);
      await ansMd(qtPath, problemType);
    }
  }
}
