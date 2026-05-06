import type {
  AnswerUrl,
  IdsUrl,
  IdsAnswerUrl,
  IdsQuestionUrl,
  QuestionUrl,
} from '@/libs/types/url';

import { baseUrl } from '@/libs/constants/request';

export const questionUrlBuilder = ({ problemSetId, examId, problemType }: QuestionUrl) =>
  `${baseUrl}/api/problem-sets/${problemSetId}/exam-problems` +
  `?exam_id=${examId}&problem_type=${problemType}`;

export const answerUrlBuilder = ({ examId, problemSetId, problemType }: AnswerUrl) =>
  `${baseUrl}/api/exams/${examId}/problem-sets/${problemSetId}/last-submissions` +
  `?problem_type=${problemType}`;

export const idsUrlBuilder = ({
  problemSetId,
  examId,
  problemType,
  page = 0,
  limit = 100,
}: IdsUrl) =>
  `${baseUrl}/api/problem-sets/${problemSetId}/exam-problem-list` +
  `?exam_id=${examId}&problem_type=${problemType}` +
  `&page=${page}&limit=${limit}`;

export const idsQuestionUrlBuilder = ({ problemSetId, problemSetProblemId }: IdsQuestionUrl) =>
  `${baseUrl}/api/problem-sets/${problemSetId}/exam-problems/${problemSetProblemId}`;

export const idsAnswerUrlBuilder = ({ examId, problemSetId, problemSetProblemId }: IdsAnswerUrl) =>
  `${baseUrl}/api/exams/${examId}/problem-sets/${problemSetId}/last-submissions` +
  `?problem_set_problem_id=${problemSetProblemId}`;

export const submitUrlBuilder = ({ examId }: { examId: string }) =>
  `${baseUrl}/api/exams/${examId}/exam-submissions`;
