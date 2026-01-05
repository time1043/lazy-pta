import { getQtPaths } from "@/lib/utils/data-dir";
import { questionGetClean } from "./app";
import { newDir } from "./lib/constants/file";

// DATA_DIR/<Provider>/<Subject>/<Times>/<QuestionType>
// DATA_DIR/<Provider>/<Subject>/<Times>/*.md

const qtPaths = await getQtPaths(newDir);
await questionGetClean(qtPaths);
