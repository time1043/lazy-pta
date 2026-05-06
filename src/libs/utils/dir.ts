import { readdir } from 'fs/promises';
import { join } from 'path';

async function readDirs(dir: string) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => join(dir, e.name));
}

export async function getProblemTypePaths(baseDir: string) {
  const problemTypePaths: string[] = [];

  for (const topic of await readDirs(baseDir)) {
    for (const problemType of await readDirs(topic)) {
      problemTypePaths.push(problemType);
    }
  }

  console.log({ problemTypePaths });
  return problemTypePaths;
}
