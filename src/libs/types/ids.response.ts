export type IdsResponse = {
  total: number;
  problemSetProblems: {
    id: string; // url path param
    title: string;
  }[];
};
