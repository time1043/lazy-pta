![design-data](./assets/design-data.svg)

- workflow 1

1. `pnpm pta:login`
2. `pnpm pta:question-get`
3. `pnpm dev` + Claude Code
4. `pnpm pta:answer-ai-submit`

- workflow 2

1. `pnpm pta:login`
2. `pnpm pta:answer-get` (Other user's answer)
3. `pnpm pta:answer-get-submit`
