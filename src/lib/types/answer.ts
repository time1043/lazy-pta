import { Status } from "./answer-get";

type Answer = {
  problemSetProblemId: string;
  status: Status;
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

export const statusMap = {
  ACCEPTED: "✅",
  PARTIAL_ACCEPTED: "🍋",
  WRONG_ANSWER: "❌",
  UNKNOWN: "❓",
} as const;
