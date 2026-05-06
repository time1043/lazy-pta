export const baseUrl = 'https://pintia.cn';

const xLollipop = process.env.X_LOLLIPOP ?? '';
export const headers = {
  Accept: 'application/json;charset=UTF-8',
  'Content-Type': 'application/json',
  'x-lollipop': xLollipop,
  'x-marshmallow': '',
};
