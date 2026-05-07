---
name: answer-ai
description: Read question-get-clean.json and generate answer-ai.json for each problem set. Use when user asks to "generate AI answers", "answer questions", "process question files", or mentions "answer-ai".
version: 1.0.0
---

# Generate answer-ai.json

Read `question-get-clean.json` files from the workspace and generate `answer-ai.json` with AI answers.

## Types

See `src/libs/types/answer-ai.ts` for the output type definitions:

- **Single** (MC, TOF, SUBJ): `{ id, answer }`
- **Multiple** (MC_MORE, FILL): `{ id, answers[] }`
- **Programming** (PROG, SQL): `{ id, answer }` -- `answer` is the source code

## Steps

1. Find all `question-get-clean.json` files:
   ```
   find data/workspace -name "question-get-clean.json"
   ```

2. For each file found:
   - Determine the **problem type** from the directory path (e.g., `PROGRAMMING`, `MULTIPLE_CHOICE`, `TRUE_OR_FALSE`, etc.)
   - Read the file content
   - If `answer-ai.json` already exists in the same directory, **skip** it
   - Generate answers based on the problem type
   - Write `answer-ai.json` to the same directory

3. Report which files were generated and which were skipped.

## Answer Generation Rules

### MULTIPLE_CHOICE / MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER

- Analyze the question `description` and `choices`
- For MULTIPLE_CHOICE: pick the single best answer
- For MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER: pick all correct answers
- `answer` value is the choice letter: `"A"`, `"B"`, `"C"`, `"D"`, etc. (index 0=A, 1=B, 2=C, ...)

```json
[{ "id": "<problem-id>", "answer": "A" }]
```

For MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER:
```json
[{ "id": "<problem-id>", "answers": ["A", "C"] }]
```

### TRUE_OR_FALSE

- Analyze the statement and determine if it's true or false
- `answer` value is `"true"` or `"false"`

```json
[{ "id": "<problem-id>", "answer": "true" }]
```

### FILL_IN_THE_BLANK

- Read the description and fill in each blank with the correct answer
- `answers` array contains one string per blank, in order

```json
[{ "id": "<problem-id>", "answers": ["answer1", "answer2"] }]
```

### PROGRAMMING

- Read the problem description and example test data
- Write a complete Python program that solves the problem
- The program should handle the input/output format shown in `exampleTestDatas`
- **Use the local Python interpreter to verify correctness** by running the program with example inputs and checking outputs match

```json
[{ "id": "<problem-id>", "answer": "line1\nline2\nline3" }]
```

### SQL_PROGRAMMING

- Read the problem description and write an SQL query
- Use the specified `dialect` (e.g., `mysql`, `sqlite`)

```json
[{ "id": "<problem-id>", "answer": "SELECT ..." }]
```

### SUBJECTIVE

- Read the question and provide a thoughtful answer

```json
[{ "id": "<problem-id>", "answer": "Your answer here..." }]
```

## Important Notes

- The `id` field must match the `id` from the input question exactly
- For PROGRAMMING: use the local Python interpreter to test code before writing
- For SQL: write valid SQL for the specified dialect
- Output must be a valid JSON array
- Use `Write` tool to write the file