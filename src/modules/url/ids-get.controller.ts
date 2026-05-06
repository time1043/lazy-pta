import path from 'path';

import { idsFilename } from '@/libs/constants/file';
import { IdsResponse } from '@/libs/types/ids.response';
import { writeJson } from '@/libs/utils/file-io';

export async function idsGetIo(dirPath: string, idsGetData: IdsResponse) {
  const filePath = path.join(dirPath, idsFilename);
  await writeJson(idsGetData, filePath);
}
