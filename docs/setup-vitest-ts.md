# ts

## start

1. ts run
2. config @ absolute path

```shell
pnpm init  # "type": "module"

# node
pnpm add -D @types/node
# ts
pnpm add -D typescript @tsconfig/node-lts
tsc --init
pnpm add tsx  # + tsc --noEmit

```

## tsconfig.json

```json
{
  "extends": "@tsconfig/node-lts",
  "compilerOptions": {
    "baseUrl": ".",
    "ignoreDeprecations": "6.0",
    "types": ["node", "vitest/globals"],
    "paths": {
      "@/*": ["src/*"]
    },
    "outDir": "dist",
    "moduleResolution": "bundler",
    "module": "esnext"
  },
  "include": ["src", "tests"]
}
```

## package.json

```json
{
  "name": "fk-ts",
  "version": "1.0.0",
  "description": "",
  "main": "src/main.js",
  "type": "module",
  "scripts": {
    "dev": "tsc --noEmit && tsx watch src/main.ts",
    "test": "vitest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.18.0",
  "devDependencies": {
    "@tsconfig/node-lts": "^24.0.0",
    "@types/node": "^24.10.2",
    "typescript": "^5.9.3",
    "vitest": "^4.0.15"
  },
  "dependencies": {
    "tsx": "^4.21.0"
  }
}
```

# vitest

https://vitest.dev/guide/

## start

```shell
pnpm add -D vitest

```

src/utils/sum.ts

```ts
export const foo = "Hello node";

export function sum(a: number, b: number) {
  return a + b;
}
```

tests/utils/sum.test.ts

```ts
import { expect, test } from "vitest";
import { sum } from "@/utils/sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

## vitest.config.ts

https://vitest.dev/config/globals.html#globals

```ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
  },
});
```
