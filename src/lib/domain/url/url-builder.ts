import { baseUrl } from "@/lib/constants/req";
import type {
  UrlAnswer,
  UrlList,
  UrlListAnswer,
  UrlListQuestion,
  UrlQuestion,
} from "@/lib/types/url";

export const urlQueBuilder = ({
  problemSetId,
  examId,
  problemType,
}: UrlQuestion) =>
  `${baseUrl}/api/problem-sets/${problemSetId}/exam-problems` +
  `?exam_id=${examId}&problem_type=${problemType}`;

export const urlAnsBuilder = ({
  examId,
  problemSetId,
  problemType,
}: UrlAnswer) =>
  `${baseUrl}/api/exams/${examId}/problem-sets/${problemSetId}/last-submissions` +
  `?problem_type=${problemType}`;

export const urlListBuilder = ({
  problemSetId,
  examId,
  problemType,
  page = 0,
  limit = 100,
}: UrlList) =>
  `${baseUrl}/api/problem-sets/${problemSetId}/exam-problem-list` +
  `?exam_id=${examId}&problem_type=${problemType}` +
  `&page=${page}&limit=${limit}`;

export const urlListQueBuilder = ({
  problemSetId,
  problemSetProblemId,
}: UrlListQuestion) =>
  `${baseUrl}/api/problem-sets/${problemSetId}/exam-problems/${problemSetProblemId}`;

export const urlListAnsBuilder = ({
  examId,
  problemSetId,
  problemSetProblemId,
}: UrlListAnswer) =>
  `${baseUrl}/api/exams/${examId}/problem-sets/${problemSetId}/last-submissions` +
  `?problem_set_problem_id=${problemSetProblemId}`;
