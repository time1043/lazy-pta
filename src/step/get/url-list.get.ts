import { urlListFile } from "@/lib/constants/file";
import { writeJson } from "@/lib/utils/file-io";
import path from "path";

export async function urlListGet(dirPath: string, urlGetData: any) {
  const urlGetPath = path.join(dirPath, urlListFile);
  await writeJson(urlGetPath, urlGetData);
}
