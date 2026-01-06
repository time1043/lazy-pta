export type UrlsGet = {
  total: number;
  problemSetProblems: {
    id: string; // url path param
    title: string;
  }[];
};
export type UrlsQueClean = string[];
export type UrlsAnsClean = string[];
