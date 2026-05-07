import { test } from '@playwright/test';

import { cookiePath } from '@/libs/constants/file';
import { baseUrl } from '@/libs/constants/request';
import {
  answerAiSubmitPost,
  idsAnswerAiSubmitPost,
} from '@/modules/answer/answer-ai-submit-post.controller';
import { idsUrlMatcher, questionUrlMatcher } from '@/modules/url/url-matcher.service';

import { getDirPath } from '../utils/page';

test.use({ storageState: cookiePath });

test('submit from answer-ai-submit.json', async ({ page }) => {
  await page.goto(baseUrl);

  page.on('response', async (response) => {
    const url = response.url();

    const questionUrlMatcherResult = questionUrlMatcher(url);
    if (questionUrlMatcherResult && response.status() === 200) {
      const { problemType, examId } = questionUrlMatcherResult;
      const dirPath = await getDirPath(page, problemType);

      await answerAiSubmitPost(dirPath, page, examId);
    }

    const idsUrlMatcherResult = idsUrlMatcher(url);
    if (idsUrlMatcherResult && response.status() === 200) {
      const { problemType, examId } = idsUrlMatcherResult;
      const dirPath = await getDirPath(page, problemType);

      await idsAnswerAiSubmitPost(dirPath, page, examId);
    }
  });

  await page.pause();
});
