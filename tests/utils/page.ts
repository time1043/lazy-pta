import { Page } from '@playwright/test';
import path from 'path';

import { wsDir } from '../../src/libs/constants/file';
import { ProblemType } from '../../src/libs/types/problem-type';

async function getTitle(page: Page) {
  const rawTitle = await page.locator('.pc-text-raw.text-lg').textContent();
  const safeTitle = (rawTitle || `unknown-${Date.now()}`).trim().replace(/[/\\?%*:|"<>]/g, '-');

  return safeTitle;
}

export async function getDirPath(page: Page, problemType: ProblemType) {
  // data/workspace/<title>/<problemType>
  // title from page, problemType from url
  const title = await getTitle(page);
  const dirPath = path.join(wsDir, title, problemType);

  return dirPath;
}

// export function isDataEmpty(data: any, path: string) {
//   if (!data || Object.keys(data).length === 0) {
//     console.log(`isDataEmpty: ${path}`);
//     return true;
//   } else false;
// }
