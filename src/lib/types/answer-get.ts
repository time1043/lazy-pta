type AnsGet<TSubmissionDetail = {}> = {
  submission: {
    submissionDetails: ({
      problemSetProblemId: string;
    } & TSubmissionDetail)[];
    judgeResponseContents: {}[] | [];
  };
};

type AnsListGet<TSubmissionDetail = {}> = {
  submission: {
    submissionDetails: ({
      problemSetProblemId: string;
    } & TSubmissionDetail)[];
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
