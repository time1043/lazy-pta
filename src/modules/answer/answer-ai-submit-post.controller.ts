import type { Page } from '@playwright/test';

import path from 'path';

import { answerAiSubmitFilename } from '@/libs/constants/file';
import { headers } from '@/libs/constants/request';
import { readJson } from '@/libs/utils/file-io';
import { sleep } from '@/libs/utils/sleep';
import { submitUrlBuilder } from '@/modules/url/url-builder.service';

export async function answerAiSubmitPost(dirPath: string, page: Page, examId: string) {
  const filePath = path.join(dirPath, answerAiSubmitFilename);
  const url = submitUrlBuilder({ examId });

  const submitData = await readJson<any>(filePath);
  if (!submitData) return;

  await sleep();
  await page.request.post(url, { headers, data: submitData });
}

export async function idsAnswerAiSubmitPost(
  dirPath: string,
  page: Page,
  examId: string,
  skip: number = 0,
) {
  const filePath = path.join(dirPath, answerAiSubmitFilename);
  const url = submitUrlBuilder({ examId });

  const submitData = await readJson<any>(filePath);
  if (!submitData) return;

  for (const data of submitData.slice(skip)) {
    await sleep();
    console.log({ headers });
    console.log(JSON.stringify(data, null, 2));
    await page.request.post(url, { headers, data });
  }
}
