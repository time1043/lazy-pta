// //////////////////////////////////////////////////////////////////
type QueChoicesGet<TProblemConfig = {}> = {
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

// type QueSingleConfig =
export type QueSingleGet = QueChoicesGet<{
  multipleChoiceProblemConfig: {
    choices: string[];
  };
}>;

export type QueMultipleGet = QueChoicesGet<{
  multipleChoiceMoreThanOneAnswerProblemConfig: {
    choices: string[];
  };
}>;

export type QueTfGet = QueChoicesGet;

export type QueFillGet = QueChoicesGet<{
  fillInTheBlankProblemConfig: {
    scores: number[];
    blankLength: string;
    blanks: { index: number; length: number }[];
  };
}>;

// //////////////////////////////////////////////////////////////////

export type UrlsGet = {
  total: number;
  problemSetProblems: {
    id: string; // url path param
    title: string;
  }[];
};
export type UrlsQueClean = string[];
export type UrlsAnsClean = string[];

// //////////////////////////////////////////////////////////////////

// type QueProgrammingConfig =
export type QueProgrammingListGet = QueListGet<{
  programmingProblemConfig: {
    exampleTestDatas: {
      name: string;
      input: string;
      output: string;
    }[];
  };
}>;

// type QueSqlConfig =
export type QueSqlListGet = QueListGet<{
  sqlProgrammingProblemConfig: {
    dialect: string; // "MYSQL" ...
  };
}>;
