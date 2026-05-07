import path from 'path';

import { questionGetFilename, questionGetCleanFilename } from '@/libs/constants/file';
import { ProblemType } from '@/libs/types/problem-type';
import { checkDir } from '@/libs/utils/check-dir';

import { questionGetCleanMd } from './question-get-clean-md.service';
import { questionGetClean } from './question-get-clean.service';

export async function questionGetCleanController(qtPaths: string[]) {
  for (const qtPath of qtPaths) {
    const problemType = path.basename(qtPath) as ProblemType;

    if (await checkDir(qtPath, { in: [questionGetFilename], ex: [questionGetCleanFilename] })) {
      console.log(`[questionGetCleanController] processing: ${qtPath}`);
      await questionGetClean(qtPath, problemType);
      await questionGetCleanMd(qtPath, problemType);
    }
  }
}
