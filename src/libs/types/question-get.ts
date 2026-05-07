// Without ids: MULTIPLE_CHOICE, MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER, TRUE_OR_FALSE, FILL_IN_THE_BLANK
type QuestionGet<TProblemConfig = {}> = {
  problemSetProblems: {
    id: string;
    description: string;
    problemConfig: TProblemConfig;
  }[];
};

export type MultipleChoiceGet = QuestionGet<{
  multipleChoiceProblemConfig: {
    choices: string[];
  };
}>;

export type MultipleChoiceMoreThanOneAnswerGet = QuestionGet<{
  multipleChoiceMoreThanOneAnswerProblemConfig: {
    choices: string[];
  };
}>;

export type TrueOrFalseGet = QuestionGet;

export type FillInTheBlankGet = QuestionGet<{
  fillInTheBlankProblemConfig: {
    scores: number[];
    blankLength: string;
    blanks: { index: number; length: number }[];
  };
}>;

// With ids: PROGRAMMING, SQL_PROGRAMMING, SUBJECTIVE
type IdsQuestionGet<TProblemConfig = {}> = {
  problemSetProblem: {
    id: string;
    description: string;
    problemConfig: TProblemConfig;
  };
}[];

export type IdsProgrammingGet = IdsQuestionGet<{
  programmingProblemConfig: {
    exampleTestDatas: {
      name: string;
      input: string;
      output: string;
    }[];
  };
}>;

export type IdsSqlGet = IdsQuestionGet<{
  sqlProgrammingProblemConfig: {
    dialect: string;
  };
}>;

export type IdsSubjectiveGet = IdsQuestionGet;
