import { wsDir } from '@/libs/constants/file';
import { getProblemTypePaths } from '@/libs/utils/dir';
import { answerAiCleanController } from '@/modules/answer/answer-ai-clean.controller';
import { questionGetCleanController } from '@/modules/question/question-get-clean.controller';

const qtPaths = await getProblemTypePaths(wsDir);
await questionGetCleanController(qtPaths);
await answerAiCleanController(qtPaths);
