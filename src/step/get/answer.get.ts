import { ansGetFile, urlsAnsCleanFile } from "@/lib/constants/file";
import { headers } from "@/lib/constants/req";
import { UrlsAnsClean } from "@/lib/types/url-get";
import { readJson, writeJson } from "@/lib/utils/file-io";
import { sleep } from "@/lib/utils/sleep";
import { Page } from "@playwright/test";
import path from "path";

export async function ansGet(dirPath: string, ansGetData: any) {
  const ansGetPath = path.join(dirPath, ansGetFile);
  await writeJson(ansGetPath, ansGetData);
}

export async function ansListGet(dirPath: string, page: Page) {
  const urlsAnsCleanPath = path.join(dirPath, urlsAnsCleanFile);
  const ansGetCleanFile = path.join(dirPath, ansGetFile);

  const urlsAnsCleanData = (await readJson(urlsAnsCleanPath)) as UrlsAnsClean;
  const ansGetCleanData = [];
  for (const url of urlsAnsCleanData) {
    await sleep();
    const response = await page.request.get(url, { headers });
    const data = await response.json();
    ansGetCleanData.push(data);
  }

  await writeJson(ansGetCleanFile, ansGetCleanData);
}
