export const withClean = (text: string) => {
  const textWithTrim = withTrim(text);
  const textWithImgUrl = withImgUrl(textWithTrim);
  return textWithImgUrl;
};

const withTrim = (text: string) => {
  return text.trim().replace(/<br\s*\/?>/gi, "\n");
};

const withImgUrl = (text: string) => {
  const imageUrlRegex = /!\[(.*?)\]\(~\/(.*?)\)/g; // []()
  return text.replace(imageUrlRegex, (match, fileName, uuid) => {
    const newAbsoluteUrl = `https://images.ptausercontent.com/${uuid}`;
    return `![${fileName}](${newAbsoluteUrl})`;
  });
};
