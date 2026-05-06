import { test } from '@playwright/test';

import { cookiePath } from '@/libs/constants/file';
import { baseUrl } from '@/libs/constants/request';
import {
  idsQuestionGetController,
  questionGetController,
} from '@/modules/question/question-get.controller';
import { idsGetCleanController } from '@/modules/url/ids-get-clean.controller';
import { idsGetIo } from '@/modules/url/ids-get.controller';
import { idsUrlMatcher, questionUrlMatcher } from '@/modules/url/url-matcher.service';

import { getDirPath } from '../utils/page';

test.use({ storageState: cookiePath });

test('for question-get.json (ids*.json)', async ({ page }) => {
  await page.goto(baseUrl);

  // Register the listener: As long as there is a response, execute the logic inside
  page.on('response', async (response) => {
    const url = response.url();

    const questionUrlMatcherResult = questionUrlMatcher(url);
    if (questionUrlMatcherResult && response.status() === 200) {
      const queGetData = await response.json();
      const { problemType } = questionUrlMatcherResult;
      const dirPath = await getDirPath(page, problemType);

      // get question
      await questionGetController(dirPath, queGetData); // fake get (watch condition)
    }

    const idsUrlMatcherResult = idsUrlMatcher(url);
    if (idsUrlMatcherResult && response.status() === 200) {
      const urlGetData = await response.json();
      const { problemType } = idsUrlMatcherResult;
      const dirPath = await getDirPath(page, problemType);

      // get url and clean (for question and answer)
      await idsGetIo(dirPath, urlGetData); // fake get (watch condition)
      await idsGetCleanController(dirPath, url); // question, answer
      // get question from ids*.json
      await idsQuestionGetController(dirPath, page); // real get request
    }
  });

  // Make sure the listener is working
  await page.pause();
});
