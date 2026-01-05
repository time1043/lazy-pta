import { queGetFile, urlListFile } from "@/lib/constants/file";
import { ProblemType } from "@/lib/types/url";
import { writeJson } from "@/lib/utils/file-io";
import { Page } from "@playwright/test";
import path from "path";

async function getTitle(page: Page) {
  const rawTitle = await page.locator(".pc-text-raw.text-lg").textContent();
  const safeTitle = (rawTitle || `unknown-${Date.now()}`)
    .trim()
    .replace(/[/\\?%*:|"<>]/g, "-");

  return safeTitle;
}

export async function getDirPath(page: Page, problemType: ProblemType) {
  // title from page
  // problemType from url
  // data/new/<title>/<problemType>
  const title = await getTitle(page);
  const dirPath = path.join("data/new", title, problemType);

  return dirPath;
}

export async function queGet(dirPath: string, qGetData: any) {
  const questionGetPath = path.join(dirPath, queGetFile);
  await writeJson(questionGetPath, qGetData);

  return dirPath;
}

export async function urlListGet(dirPath: string, urlGetData: any) {
  const urlGetPath = path.join(dirPath, urlListFile);
  await writeJson(urlGetPath, urlGetData);

  return dirPath;
}
