export const dataDir = process.env.DATA_DIR ?? "data";
export const newDir = `${dataDir}/new`;
export const cookiePath =
  process.env.COOKIE_PATH ?? "./data/auth/auth-pta-me.json";
console.log({ cookiePath });

// part 1: simple
// question
export const queGetFile = "question-get.json";
export const queGetClFile = "question-get-clean.json";
export const queGetClaiFile = "question-get-clean-ai.json";
// answer from user
export const ansGetFile = "answer-get.json";
export const ansGetClFile = "answer-get-clean.json";
// answer from ai
export const ansAiFile = "answer-ai.json";
export const ansAiClFile = "answer-ai-clean.json";

// part 2: with url
export const urlListFile = "url-list.json";
export const urlsQueCleanFile = "url-list-question-clean.json";
export const urlsAnsCleanFile = "url-list-answer-clean.json";
