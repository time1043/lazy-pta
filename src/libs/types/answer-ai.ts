// AI output types - minimal format for answer-ai.json

// MC, TOF, SUBJ
export type AnswerAiSingle = { id: string; answer: string };
// MC_MORE, FILL
export type AnswerAiMultiple = { id: string; answers: string[] };
// PROG, SQL
export type AnswerAiProgramming = { id: string; answer: string };
