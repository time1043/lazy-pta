import path from 'path';

import { answerAiFilename, answerAiSubmitFilename } from '@/libs/constants/file';
import { ProblemType } from '@/libs/types/problem-type';
import { checkDir } from '@/libs/utils/check-dir';

import { answerAiCleanMd, questionAnswerAiCleanMd } from './answer-ai-clean-md.service';
import { answerAiClean } from './answer-ai-clean.service';

export async function answerAiCleanController(qtPaths: string[]) {
  for (const qtPath of qtPaths) {
    const problemType = path.basename(qtPath) as ProblemType;

    if (await checkDir(qtPath, { in: [answerAiFilename], ex: [answerAiSubmitFilename] })) {
      console.log(`[answerAiCleanController] processing: ${qtPath}`);
      await answerAiClean(qtPath, problemType);
      await answerAiCleanMd(qtPath, problemType);
      await questionAnswerAiCleanMd(qtPath, problemType);
    }
  }
}
