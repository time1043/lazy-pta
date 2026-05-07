import fs from 'fs/promises';

async function getFileList(dirPath: string) {
  const dirents = await fs.readdir(dirPath, { withFileTypes: true });
  return dirents.filter((d) => d.isFile()).map((d) => d.name);
}

export async function checkDir(
  dirPath: string,
  options: { in: string[]; ex: string[] },
): Promise<boolean> {
  const filesNames = await getFileList(dirPath);
  const hasRequired = options.in.every((name) => filesNames.includes(name));
  const hasNoForbidden = options.ex.every((name) => !filesNames.includes(name));
  return hasRequired && hasNoForbidden;
}
