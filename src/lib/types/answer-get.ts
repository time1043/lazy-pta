const status = ["ACCEPTED", "WRONG_ANSWER", "PARTIAL_ACCEPTED"] as const;
export type Status = (typeof status)[number];

type AnsGet<TSubmissionDetail = {}, TJudgeResponseContent = {}> = {
  submission: {
    submissionDetails: ({
      problemSetProblemId: string;
    } & TSubmissionDetail)[];
    judgeResponseContents: ({
      problemSetProblemId: string;
      status: Status;
    } & TJudgeResponseContent)[];
  };
};

type AnsListGet<TSubmissionDetail = {}, TJudgeResponseContent = {}> = {
  submission: {
    submissionDetails: ({
      problemSetProblemId: string;
    } & TSubmissionDetail)[];
    judgeResponseContents: ({
      problemSetProblemId: string;
      status: Status;
    } & TJudgeResponseContent)[];
  };
}[];

// //////////////////////////////////////////////////////////////////

export type AnsSingleGet = AnsGet<{
  multipleChoiceSubmissionDetail: {
    answer: string; // A, B, C, D
  };
}>;

export type AnsMultipleGet = AnsGet<{
  multipleChoiceMoreThanOneAnswerSubmissionDetail: {
    answers: string[]; // A, B, C, D
  };
}>;

export type AnsTfGet = AnsGet<{
  trueOrFalseSubmissionDetail: {
    answer: string;
  };
}>;

export type AnsFillGet = AnsGet<{
  fillInTheBlankSubmissionDetail: {
    answers: string[];
  };
}>;

// //////////////////////////////////////////////////////////////////

export type AnsSubjectiveListGet = AnsListGet<{
  subjectiveSubmissionDetail: {
    answer: string;
  };
}>;

export type AnsSqlListGet = AnsListGet<{
  sqlProgrammingSubmissionDetail: {
    program: string;
  };
}>;

export type AnsProgrammingListGet = AnsListGet<{
  programmingSubmissionDetail: {
    compiler: "JAVAC";
    program: string;
  };
}>;
