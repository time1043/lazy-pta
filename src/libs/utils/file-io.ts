import fs from 'fs/promises';
import path from 'path';

export async function readJson<T>(filePath: string): Promise<T | null> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log(`[readJson] file not exists: ${filePath}`);
    return null;
  }
}

export async function writeJson<T>(data: T, filePath: string) {
  const dirPath = path.dirname(filePath);
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  console.log(`[writeJson] file written: ${filePath}`);
}

export async function writeMd(data: string, filePath: string) {
  await fs.writeFile(filePath, data, 'utf-8');

  console.log(`[writeMd] file written: ${filePath}`);
}
