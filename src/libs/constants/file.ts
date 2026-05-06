export const dataDir = process.env.DATA_DIR ?? 'data';
export const wsDir = `${dataDir}/workspace`;
export const authDir = `${dataDir}/auth`;

const cookieFilename = process.env.COOKIE_NAME ?? 'pta-auth.json';
export const cookiePath = `${authDir}/${cookieFilename}`;

export const questionGetFilename = `question-get.json`;
export const questionGetCleanFilename = `question-get-clean.json`;
export const answerAiFilename = `answer-ai.json`;
export const answerAiSubmitFilename = `answer-ai-submit.json`;

export const answerGetFilename = `answer-get.json`;
export const answerGetCleanFilename = `answer-get-clean.json`;
export const answerGetSubmitFilename = `answer-get-submit.json`;

export const idsFilename = `ids.json`;
export const idsQuestionCleanFilename = `ids-question-clean.json`;
export const idsAnswerCleanFilename = `ids-answer-clean.json`;
