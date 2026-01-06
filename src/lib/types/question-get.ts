type QueGet<TProblemConfig = {}> = {
  problemSetProblems: {
    id: string;
    description: string;
    problemConfig: TProblemConfig;
  }[];
};

type QueListGet<TProblemConfig = {}> = {
  problemSetProblem: {
    id: string;
    description: string;
    // content: string; // ❌
    problemConfig: TProblemConfig;
  };
}[];

// //////////////////////////////////////////////////////////////////

export type QueSingleGet = QueGet<{
  multipleChoiceProblemConfig: {
    choices: string[];
  };
}>;

export type QueMultipleGet = QueGet<{
  multipleChoiceMoreThanOneAnswerProblemConfig: {
    choices: string[];
  };
}>;

export type QueTfGet = QueGet;

export type QueFillGet = QueGet<{
  fillInTheBlankProblemConfig: {
    scores: number[];
    blankLength: string;
    blanks: { index: number; length: number }[];
  };
}>;

// //////////////////////////////////////////////////////////////////

export type QueProgrammingListGet = QueListGet<{
  programmingProblemConfig: {
    exampleTestDatas: {
      name: string;
      input: string;
      output: string;
    }[];
  };
}>;

export type QueSqlListGet = QueListGet<{
  sqlProgrammingProblemConfig: {
    dialect: string; // "MYSQL" ...
  };
}>;
