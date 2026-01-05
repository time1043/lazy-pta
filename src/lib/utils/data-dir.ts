import { readdir } from "fs/promises";
import { join } from "path";
import fs from "fs/promises";

async function getFileList(dirPath: string) {
  const dirents = await fs.readdir(dirPath, { withFileTypes: true });
  // Filter out folders and keep only files
  const filesNames = dirents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  return filesNames;
}

export async function checkDir(
  dirPath: string,
  options: { in: string[]; ex: string[] }
): Promise<boolean> {
  const filesNames = await getFileList(dirPath);

  // Check that all files in include are in the directory
  // Check that all files in exclude are not in the directory
  const hasRequired = options.in.every((name) => filesNames.includes(name));
  const hasNoForbidden = options.ex.every((name) => !filesNames.includes(name));

  console.log(hasRequired && hasNoForbidden);
  return hasRequired && hasNoForbidden;
}

// ///////////////////////////////////////////////////////////
//

export async function walkDirs(
  baseUrl: string,
  depth: number
): Promise<string[]> {
  if (depth === 0) return [baseUrl];

  const entries = await readdir(baseUrl, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory());

  const qtPaths = await Promise.all(
    dirs.map((d) => walkDirs(join(baseUrl, d.name), depth - 1))
  );

  return qtPaths.flat();
}

// export async function walkDirs(
//   baseDir: string,
//   depth: number
// ): Promise<string[]> {
//   if (depth === 0) return [baseDir];

//   const entries = await readdir(baseDir, { withFileTypes: true });
//   const dirs = entries.filter((e) => e.isDirectory());

//   const qtPaths: string[] = [];

//   for (const dir of dirs) {
//     const fullPath = join(baseDir, dir.name);
//     const sub = await walkDirs(fullPath, depth - 1);
//     qtPaths.push(...sub);
//   }

//   return qtPaths;
// }

// // DATA_DIR/<Provider>/<Subject>/<Times>/<QuestionType>
// // walkDirs(baseDir, 4)

// // DATA_DIR/<Provider>/<Subject>/<Times>/<QuestionType>
// // walkDirs(newDir, 3)

// ///////////////////////////////////////////////////////////
//

async function readDirs(dir: string) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => join(dir, e.name));
}

export async function getQtPaths(baseDir: string) {
  const qtPaths: string[] = [];

  for (const subject of await readDirs(baseDir)) {
    for (const times of await readDirs(subject)) {
      for (const qt of await readDirs(times)) {
        qtPaths.push(qt);
      }
    }
  }

  console.log(qtPaths);
  return qtPaths;
}
