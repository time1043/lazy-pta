type Answer = {
  problemSetProblemId: string;
};

export type AnsSingle = Answer & { answer: string };
export type AnsMultiple = Answer & { answers: string[] };
export type AnsTf = Answer & { answer: string };
export type AnsFill = Answer & { answers: string[] };

export type AnsSubjective = Answer & { answer: string };
export type AnsProgramming = Answer & {
  lang: string;
  program: string;
};

export const langMap = {
  JAVAC: "java",
  MYSQL: "sql",
} as const;
