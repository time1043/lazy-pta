import { ProblemType } from './problem-type';

export type QuestionUrl = {
  problemSetId: string;
  examId: string;
  problemType: ProblemType;
};

export type AnswerUrl = {
  examId: string;
  problemSetId: string;
  problemType: ProblemType;
};

export type IdsUrl = {
  problemSetId: string;
  examId: string;
  problemType: ProblemType;
  page?: number;
  limit?: number;
};

export type IdsQuestionUrl = {
  problemSetId: string;
  problemSetProblemId: string;
};

export type IdsAnswerUrl = {
  examId: string;
  problemSetId: string;
  problemSetProblemId: string;
};

// // urlDomain -> urlStr (builderUrl)
// // urlStr -> urlDomain (parserUrl)
// export type WithUrlStr = { urlStr: string };
