const problemTypes = [
  'TRUE_OR_FALSE',
  'FILL_IN_THE_BLANK',
  'FILL_IN_THE_BLANK_FOR_PROGRAMMING', // 🍃
  'CODE_COMPLETION', // 🍃
  'CHOICE_BLANK', // 🍃
  'MULTIPLE_CHOICE',
  'MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER',

  'PROGRAMMING', // .java, .py
  'SQL_PROGRAMMING', // .sql
  'MULTIPLE_FILE', // 🍃
  'SUBJECTIVE', // subjective.md
] as const;
export type ProblemType = (typeof problemTypes)[number];

export function isProblemType(v: string | null): v is ProblemType {
  return !!v && (problemTypes as readonly string[]).includes(v);
}
