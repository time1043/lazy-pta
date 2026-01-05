import { cookiePath } from "@/lib/constants/file";
import { urlListMatcher, urlQueMatcher } from "@/lib/domain/url/url-matcher";
import { queClean } from "@/step/clean/question-get.clean";
import { queMd } from "@/step/clean/question.md";
import { urlListClean } from "@/step/clean/url-list.clean";
import { queListGet } from "@/step/get/question-list.get";
import { getDirPath, queGet, urlListGet } from "@/step/get/question.get";
import { test } from "@playwright/test";

test.use({ storageState: cookiePath });

test("question-get", async ({ page }) => {
  await page.goto("https://pintia.cn");

  // Register the listener: As long as there is a response, execute the logic inside
  page.on("response", async (response) => {
    const url = response.url();

    if (urlQueMatcher(url) && response.status() === 200) {
      const qGetData = await response.json();
      const { problemType } = urlQueMatcher(url)!;

      const dirPath = await getDirPath(page, problemType);
      // get question and clean
      await queGet(dirPath, qGetData); // fake get
      await queClean(dirPath, problemType);
      // md question
      await queMd(dirPath, problemType);
    }

    if (urlListMatcher(url) && response.status() === 200) {
      const urlGetData = await response.json();
      const { problemType } = urlListMatcher(url)!;

      const dirPath = await getDirPath(page, problemType);
      // get url and clean for question and answer
      await urlListGet(dirPath, urlGetData); // fake get
      await urlListClean(dirPath, url);
      // get question and clean
      await queListGet(dirPath, page); // real get request
      await queClean(dirPath, problemType);
      // md question
      await queMd(dirPath, problemType);
    }
  });

  // Make sure the listener is working
  await page.pause();
});

// TODO
test("answer-get", async ({ page }) => {});

test("submit from answer-get/ai.json", async ({ page }) => {});

test("submit from ai", async ({ page }) => {});
