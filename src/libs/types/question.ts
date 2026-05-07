type Question = {
  id: string;
  description: string;
};

export type MultipleChoice = Question & { choices: string[] };
export type TrueOrFalse = Question;
export type FillInTheBlank = Question & {
  scores: number[];
  blankLength: string;
  blanks: { index: number; length: number }[];
};

export type IdsProgramming = Question & {
  exampleTestDatas: {
    name: string;
    input: string;
    output: string;
  }[];
};
export type IdsSql = Question & {
  dialect: string;
};
export type IdsSubjective = Question;
