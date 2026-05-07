export type AnswerStatus = 'ACCEPTED' | 'PARTIAL_ACCEPTED' | 'WRONG_ANSWER' | 'UNKNOWN';

type AnswerAi = {
  id: string;
  status: AnswerStatus;
};

// MC, TOF, SUBJ
export type AnswerAiSingle = AnswerAi & { answer: string };
// MC_MORE, FILL
export type AnswerAiMultiple = AnswerAi & { answers: string[] };
// PROG, SQL
export type AnswerAiProgramming = AnswerAi & { lang: string; program: string };

export const statusMap: Record<AnswerStatus, string> = {
  ACCEPTED: '✅',
  PARTIAL_ACCEPTED: '🍋',
  WRONG_ANSWER: '❌',
  UNKNOWN: '❓',
};

// --- Submit types ---

type SubmitDetail<T> = {
  problemId: '0';
  problemSetProblemId: string;
} & T;

export type MultipleChoiceSubmit = {
  problemType: 'MULTIPLE_CHOICE';
  details: SubmitDetail<{
    multipleChoiceSubmissionDetail: { answer: string };
  }>[];
};

export type MultipleChoiceMoreThanOneAnswerSubmit = {
  problemType: 'MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER';
  details: SubmitDetail<{
    multipleChoiceMoreThanOneAnswerSubmissionDetail: { answers: string[] };
  }>[];
};

export type TrueOrFalseSubmit = {
  problemType: 'TRUE_OR_FALSE';
  details: SubmitDetail<{
    trueOrFalseSubmissionDetail: { answer: string };
  }>[];
};

export type FillInTheBlankSubmit = {
  problemType: 'FILL_IN_THE_BLANK';
  details: SubmitDetail<{
    fillInTheBlankSubmissionDetail: { answers: string[] };
  }>[];
};

export type ProgrammingSubmit = {
  problemType: 'PROGRAMMING';
  details: SubmitDetail<{
    programmingSubmissionDetail: { program: string };
  }>[];
};

export type SqlProgrammingSubmit = {
  problemType: 'SQL_PROGRAMMING';
  details: SubmitDetail<{
    sqlProgrammingSubmissionDetail: { program: string };
  }>[];
};

export type SubjectiveSubmit = {
  problemType: 'SUBJECTIVE';
  details: SubmitDetail<{
    subjectiveSubmissionDetail: { answer: string };
  }>[];
};
