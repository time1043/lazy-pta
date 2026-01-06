export const baseUrl = "https://pintia.cn";
export const xLollipop = process.env.X_LOLLIPOP ?? "";
console.log({ xLollipop });
export const headers = {
  Accept: "application/json;charset=UTF-8",
  "Content-Type": "application/json",
  "x-lollipop": xLollipop,
  "x-marshmallow": "",
};
