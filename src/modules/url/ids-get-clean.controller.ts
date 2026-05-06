import path from 'path';

import {
  idsAnswerCleanFilename,
  idsFilename,
  idsQuestionCleanFilename,
} from '@/libs/constants/file';
import { IdsResponse } from '@/libs/types/ids.response';
import { readJson, writeJson } from '@/libs/utils/file-io';

import { idsAnswerUrlBuilder, idsQuestionUrlBuilder } from './url-builder.service';
import { idsUrlMatcher } from './url-matcher.service';

export async function idsGetCleanController(dirPath: string, url: string) {
  await idsQuestionGetCleanController(dirPath, url);
  await idsAnswerGetCleanController(dirPath, url);
}

async function idsQuestionGetCleanController(dirPath: string, url: string) {
  const { idsData, idsCleanPath } = await loadIdsData(dirPath, idsQuestionCleanFilename);

  const { problemSetId } = idsUrlMatcher(url)!;
  const urlsClData = idsData.problemSetProblems.map((item) =>
    idsQuestionUrlBuilder({ problemSetId, problemSetProblemId: item.id }),
  );

  await writeJson(urlsClData, idsCleanPath);
}

async function idsAnswerGetCleanController(dirPath: string, url: string) {
  const { idsData, idsCleanPath } = await loadIdsData(dirPath, idsAnswerCleanFilename);

  const { problemSetId, examId } = idsUrlMatcher(url)!;
  const urlsClData = idsData.problemSetProblems.map((item) =>
    idsAnswerUrlBuilder({ examId, problemSetId, problemSetProblemId: item.id }),
  );

  await writeJson(urlsClData, idsCleanPath);
}

async function loadIdsData(dirPath: string, idsCleanFile: string) {
  const idsPath = path.join(dirPath, idsFilename);
  const idsCleanPath = path.join(dirPath, idsCleanFile); // question, answer
  const idsData = (await readJson(idsPath)) as IdsResponse;
  return { idsData, idsCleanPath };
}
