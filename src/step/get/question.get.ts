import { queGetFile, urlsQueCleanFile } from "@/lib/constants/file";
import { headers } from "@/lib/constants/req";
import { UrlsQueClean } from "@/lib/types/url-get";
import { readJson, writeJson } from "@/lib/utils/file-io";
import { sleep } from "@/lib/utils/sleep";
import { Page } from "@playwright/test";
import path from "path";

export async function queGet(dirPath: string, queGetData: any) {
  const queGetPath = path.join(dirPath, queGetFile);
  await writeJson(queGetPath, queGetData);
}

export async function queListGet(dirPath: string, page: Page) {
  const urlsQueCleanPath = path.join(dirPath, urlsQueCleanFile);
  const queGetCleanPath = path.join(dirPath, queGetFile);

  const urlsQueCleanData = (await readJson(urlsQueCleanPath)) as UrlsQueClean;
  const queGetCleanData = [];
  for (const url of urlsQueCleanData) {
    await sleep();
    const response = await page.request.get(url, { headers });
    const data = await response.json();
    queGetCleanData.push(data);
  }

  await writeJson(queGetCleanPath, queGetCleanData);
}
