import path from 'path';

import type { MultipleChoice, FillInTheBlank, TrueOrFalse } from '@/libs/types/question';

import { questionGetCleanFilename, questionGetCleanMdFilename } from '@/libs/constants/file';
import { ProblemType } from '@/libs/types/problem-type';
import { readJson, writeMd } from '@/libs/utils/file-io';
import { withClean } from '@/libs/utils/text';

export async function questionGetCleanMd(dirPath: string, problemType: ProblemType) {
  const questionGetCleanPath = path.join(dirPath, questionGetCleanFilename);
  const questionMdPath = path.join(dirPath, questionGetCleanMdFilename);
  const questionGetCleanData = await readJson<any[]>(questionGetCleanPath);
  if (!questionGetCleanData) return;

  let mdParts: string[] = [];

  switch (problemType) {
    case 'MULTIPLE_CHOICE':
    case 'MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER':
      mdParts = multipleChoiceMd(questionGetCleanData as MultipleChoice[]);
      break;

    case 'FILL_IN_THE_BLANK':
      mdParts = fillInTheBlankMd(questionGetCleanData as FillInTheBlank[]);
      break;

    case 'TRUE_OR_FALSE':
    case 'SUBJECTIVE':
    case 'SQL_PROGRAMMING':
    case 'PROGRAMMING':
      mdParts = defaultMd(questionGetCleanData as TrueOrFalse[]);
      break;

    default:
      console.log(`[questionMd] unsupported problemType: ${problemType}`);
      return;
  }

  await writeMd(mdParts.join(''), questionMdPath);
}

function multipleChoiceMd(data: MultipleChoice[]) {
  return data.map((q, index) => {
    const choicesText = q.choices.map((choice, i) => {
      const letter = String.fromCharCode(65 + i);
      return `${letter}.\n${choice}\n\n`;
    });
    return `## ${index + 1}.\n\n${q.description}\n\n${choicesText.join('')}`;
  });
}

function fillInTheBlankMd(data: FillInTheBlank[]) {
  return data.map((q, index) => {
    const { description, blanks } = q;
    const blanksOrder = blanks.map((b, idx) => ({ ...b, order: idx + 1 }));
    const blanksSorted = [...blanksOrder].sort((a, b) => b.order - a.order);

    let result = description;
    blanksSorted.forEach((b) => {
      const pos = b.index;
      const placeholder = `\\_\\_(${b.order})\\_\\_`;
      result = result.substring(0, pos) + placeholder + result.substring(pos);
    });
    return `## ${index + 1}.\n\n${withClean(result)}\n\n`;
  });
}

function defaultMd(data: TrueOrFalse[]) {
  return data.map((q, index) => {
    return `## ${index + 1}.\n\n${q.description}\n\n`;
  });
}
