import {
  urlListFile,
  urlsAnsCleanFile,
  urlsQueCleanFile,
} from "@/lib/constants/file";
import {
  urlListAnsBuilder,
  urlListQueBuilder,
} from "@/lib/domain/url/url-builder";
import { urlListMatcher } from "@/lib/domain/url/url-matcher";
import { UrlsGet } from "@/lib/types/question-get";
import { readJson, writeJson } from "@/lib/utils/file-io";
import path from "path";

export async function urlListClean(dirPath: string, url: string) {
  await urlListQueClean(dirPath, url);
  await urlListAnsClean(dirPath, url);
}

async function getMete(dirPath: string, urlListCleanFile: string) {
  // urlListPath -> urlsData ---> urlsClData
  // urlsClPath
  const urlListPath = path.join(dirPath, urlListFile);
  const urlsClPath = path.join(dirPath, urlListCleanFile);
  const urlsData = (await readJson(urlListPath)) as UrlsGet;
  return { urlsData, urlsClPath };
}

async function urlListQueClean(dirPath: string, url: string) {
  const { urlsData, urlsClPath } = await getMete(dirPath, urlsQueCleanFile);

  const { problemSetId } = urlListMatcher(url)!;
  const urlsClData = urlsData.problemSetProblems.map((item) =>
    urlListQueBuilder({ problemSetId, problemSetProblemId: item.id })
  );

  await writeJson(urlsClPath, urlsClData);
}

async function urlListAnsClean(dirPath: string, url: string) {
  const { urlsData, urlsClPath } = await getMete(dirPath, urlsAnsCleanFile);

  const { problemSetId, examId } = urlListMatcher(url)!;
  const urlsClData = urlsData.problemSetProblems.map((item) =>
    urlListAnsBuilder({ examId, problemSetId, problemSetProblemId: item.id })
  );

  await writeJson(urlsClPath, urlsClData);
}
