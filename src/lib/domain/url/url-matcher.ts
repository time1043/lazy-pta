import {
  isProblemType,
  UrlAnswer,
  UrlList,
  UrlQuestion,
} from "@/lib/types/url";

type MatchResult<T> = ({ urlStr: string } & T) | null;

function getUrlObj(urlStr: string) {
  try {
    return new URL(urlStr);
  } catch {
    return null;
  }
}

export function urlQueMatcher(urlStr: string): MatchResult<UrlQuestion> {
  const url = getUrlObj(urlStr);
  if (!url) return null;

  const matcher = /^\/api\/problem-sets\/([^/]+)\/exam-problems$/;
  const match = url.pathname.match(matcher);
  const examId = url.searchParams.get("exam_id");
  const problemType = url.searchParams.get("problem_type");

  return match && examId && isProblemType(problemType)
    ? { urlStr, problemSetId: match[1], examId, problemType }
    : null;
}

export function urlAnsMatcher(urlStr: string): MatchResult<UrlAnswer> {
  const url = getUrlObj(urlStr);
  if (!url) return null;

  const matcher =
    /^\/api\/exams\/([^/]+)\/problem-sets\/([^/]+)\/last-submissions$/;
  const match = url.pathname.match(matcher);
  const problemType = url.searchParams.get("problem_type");

  return match && isProblemType(problemType)
    ? { urlStr, examId: match[1], problemSetId: match[2], problemType }
    : null;
}

export function urlListMatcher(urlStr: string): MatchResult<UrlList> {
  const url = getUrlObj(urlStr);
  if (!url) return null;

  const matcher = /^\/api\/problem-sets\/([^/]+)\/exam-problem-list$/;
  const match = url.pathname.match(matcher);
  const examId = url.searchParams.get("exam_id");
  const problemType = url.searchParams.get("problem_type");
  const page = Number(url.searchParams.get("page")) || 0;
  const limit = Number(url.searchParams.get("limit")) || 100;

  return match && examId && isProblemType(problemType)
    ? { urlStr, problemSetId: match[1], examId, problemType, page, limit }
    : null;
}

export function urlListQueMatcher(urlStr: string) {
  const url = getUrlObj(urlStr);
  if (!url) return null;

  const matcher = /^\/api\/problem-sets\/([^/]+)\/exam-problems\/([^/]+)$/;
  const match = url.pathname.match(matcher);

  return match
    ? { urlStr, problemSetId: match[1], problemSetProblemId: match[2] }
    : null;
}

export function urlListAnsMatcher(urlStr: string) {
  const url = getUrlObj(urlStr);
  if (!url) return null;

  const matcher =
    /^\/api\/exams\/([^/]+)\/problem-sets\/([^/]+)\/last-submissions$/;
  const match = url.pathname.match(matcher);
  const problemSetProblemId = url.searchParams.get("problem_set_problem_id");

  return match && problemSetProblemId
    ? { urlStr, examId: match[1], problemSetId: match[2], problemSetProblemId }
    : null;
}
