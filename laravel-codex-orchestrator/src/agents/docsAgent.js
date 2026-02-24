import { runPromptAgent } from "./baseAgent.js";

export function runDocsAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/docs.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}