import { cookiePath } from "@/lib/constants/file";
import {
  urlAnsMatcher,
  urlListMatcher,
  urlQueMatcher,
} from "@/lib/domain/url/url-matcher";
import { urlListClean } from "@/step/clean/url-list.clean";
import { ansGet, ansListGet } from "@/step/get/answer.get";
import { queGet, queListGet } from "@/step/get/question.get";
import { urlListGet } from "@/step/get/url-list.get";
import { getDirPath } from "@/step/get/util";
import { test } from "@playwright/test";

test.use({ storageState: cookiePath });

test("answer-get(independence)", async ({ page }) => {
  await page.goto("https://pintia.cn");

  page.on("response", async (response) => {
    const url = response.url();

    if (urlQueMatcher(url) && response.status() === 200) {
      const queGetData = await response.json();
      const { problemType } = urlQueMatcher(url)!;
      const dirPath = await getDirPath(page, problemType);

      // get question
      await queGet(dirPath, queGetData); // fake get
    }

    if (urlAnsMatcher(url) && response.status() === 200) {
      const ansGetData = await response.json();
      const { problemType } = urlAnsMatcher(url)!;
      const dirPath = await getDirPath(page, problemType);

      // get answer
      await ansGet(dirPath, ansGetData); // fake get
    }

    if (urlListMatcher(url) && response.status() === 200) {
      const urlGetData = await response.json();
      const { problemType } = urlListMatcher(url)!;
      const dirPath = await getDirPath(page, problemType);

      // get url and clean (for question and answer)
      await urlListGet(dirPath, urlGetData); // fake get
      await urlListClean(dirPath, url); // que, ans
      // get question/answer from url*.json
      await queListGet(dirPath, page); // real get request
      await ansListGet(dirPath, page); // real get request
    }
  });

  // Make sure the listener is working
  await page.pause();
});
