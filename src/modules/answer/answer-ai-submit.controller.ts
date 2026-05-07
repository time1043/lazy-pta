import path from 'path';

import { answerAiFilename, answerAiSubmitFilename } from '@/libs/constants/file';
import { ProblemType } from '@/libs/types/problem-type';
import { checkDir } from '@/libs/utils/check-dir';

import { answerAiMd, questionAnswerAiMd } from './answer-ai-md.service';
import { answerAiSubmit } from './answer-ai-submit.service';

export async function answerAiSubmitController(qtPaths: string[]) {
  for (const qtPath of qtPaths) {
    const problemType = path.basename(qtPath) as ProblemType;

    if (await checkDir(qtPath, { in: [answerAiFilename], ex: [answerAiSubmitFilename] })) {
      console.log(`[answerAiSubmitController] processing: ${qtPath}`);
      await answerAiSubmit(qtPath, problemType);
      await answerAiMd(qtPath, problemType);
      await questionAnswerAiMd(qtPath, problemType);
    }
  }
}
