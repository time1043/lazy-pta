type Question = {
  id: string;
  description: string;
};

export type QueSingle = Question & { choices: string[] };
export type QueMultiple = Question & { choices: string[] };
export type QueTf = Question;
export type QueFill = Question & {
  // scores: number[];
  blankLength: string;
  blanks: { index: number; length: number }[];
};

export type QueProgramming = Question & {
  exampleTestDatas: {
    name: string;
    input: string;
    output: string;
  }[];
};
export type QueSql = Question & {
  dialect: string;
};
