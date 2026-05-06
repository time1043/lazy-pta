import { Page } from '@playwright/test';
import path from 'path';

import { questionGetFilename, idsQuestionCleanFilename } from '@/libs/constants/file';
import { headers } from '@/libs/constants/request';
import { readJson, writeJson } from '@/libs/utils/file-io';
import { sleep } from '@/libs/utils/sleep';

export async function questionGetController(dirPath: string, queGetData: any) {
  const questionGetPath = path.join(dirPath, questionGetFilename);
  await writeJson(queGetData, questionGetPath);
}

export async function idsQuestionGetController(dirPath: string, page: Page) {
  const idsQuestionCleanPath = path.join(dirPath, idsQuestionCleanFilename);
  const questionGetPath = path.join(dirPath, questionGetFilename);

  const idsQuestionCleanData = await readJson<string[]>(idsQuestionCleanPath);
  if (!idsQuestionCleanData) return;

  const questionGetData = [];
  for (const url of idsQuestionCleanData) {
    await sleep();
    console.log({ headers });
    const response = await page.request.get(url, { headers });
    const data = await response.json();
    questionGetData.push(data);
  }

  await writeJson(questionGetData, questionGetPath);
}
