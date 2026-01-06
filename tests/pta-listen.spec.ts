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

test("question-get", async ({ page }) => {
  await page.goto("https://pintia.cn");

  // Register the listener: As long as there is a response, execute the logic inside
  page.on("response", async (response) => {
    const url = response.url();

    if (urlQueMatcher(url) && response.status() === 200) {
      const queGetData = await response.json();
      const { problemType } = urlQueMatcher(url)!;

      const dirPath = await getDirPath(page, problemType);
      // get question and clean question
      await queGet(dirPath, queGetData); // fake get
      // await queClean(dirPath, problemType);
      // // md question
      // await queMd(dirPath, problemType);
    }

    if (urlListMatcher(url) && response.status() === 200) {
      const urlGetData = await response.json();
      const { problemType } = urlListMatcher(url)!;

      const dirPath = await getDirPath(page, problemType);
      // get url and clean (for question and answer)
      await urlListGet(dirPath, urlGetData); // fake get
      await urlListClean(dirPath, url); // que, ans
      // get question from url*.json and clean question
      await queListGet(dirPath, page); // real get request
      // await queClean(dirPath, problemType);
      // // md question
      // await queMd(dirPath, problemType);
    }
  });

  // Make sure the listener is working
  await page.pause();
});

test("answer-get", async ({ page }) => {
  await page.goto("https://pintia.cn");

  page.on("response", async (response) => {
    const url = response.url();

    if (urlAnsMatcher(url) && response.status() === 200) {
      const ansGetData = await response.json();
      const { problemType } = urlAnsMatcher(url)!;

      const dirPath = await getDirPath(page, problemType);
      // get answer and clean answer
      await ansGet(dirPath, ansGetData); // fake get
      // await ansClean(dirPath, problemType);
      // // md answer
      // await ansMd(dirPath, problemType);
    }

    if (urlListMatcher(url) && response.status() === 200) {
      // ////////////////////// REPEAT //////////////////////
      // maybe url-list*.json already exists, so repeat
      const urlGetData = await response.json();
      const { problemType } = urlListMatcher(url)!;

      const dirPath = await getDirPath(page, problemType);
      // get url and clean (for question and answer)
      await urlListGet(dirPath, urlGetData); // fake get
      await urlListClean(dirPath, url); // que, ans
      // ////////////////////// REPEAT //////////////////////
      // get answer from url*.json and clean answer
      await ansListGet(dirPath, page); // real get request
      // await ansClean(dirPath, problemType);
      // // md answer
      // await ansMd(dirPath, problemType);
    }
  });

  // Make sure the listener is working
  await page.pause();
});

// TODO
test("submit from answer-get/ai.json", async ({ page }) => {});

test("submit from ai", async ({ page }) => {});
