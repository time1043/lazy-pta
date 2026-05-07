import { wsDir } from '@/libs/constants/file';
import { getProblemTypePaths } from '@/libs/utils/dir';
import { questionGetCleanController } from '@/modules/question/question-get-clean.controller';

const qtPaths = await getProblemTypePaths(wsDir);
await questionGetCleanController(qtPaths);
