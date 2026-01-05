const ProblemTypes = [
  "TRUE_OR_FALSE",
  "FILL_IN_THE_BLANK",
  "MULTIPLE_CHOICE",
  "MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER",
  "SQL_PROGRAMMING", // .sql
  "PROGRAMMING", // .java
  "SUBJECTIVE", // subjective.md
] as const;
export type ProblemType = (typeof ProblemTypes)[number];
export function isProblemType(v: string | null): v is ProblemType {
  return !!v && (ProblemTypes as readonly string[]).includes(v);
}

export type UrlQuestion = {
  problemSetId: string;
  examId: string;
  problemType: ProblemType;
};
export type UrlAnswer = {
  examId: string;
  problemSetId: string;
  problemType: ProblemType;
};
export type UrlList = {
  problemSetId: string;
  examId: string;
  problemType: ProblemType;
  page?: number;
  limit?: number;
};
export type UrlListQuestion = {
  problemSetId: string;
  problemSetProblemId: string;
};
export type UrlListAnswer = {
  examId: string;
  problemSetId: string;
  problemSetProblemId: string;
};

// urlDomain → urlStr (builderUrl)
// urlStr → urlDomain (parserUrl)
export type WithUrlStr = { urlStr: string };
