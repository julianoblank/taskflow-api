import { runPromptAgent } from "./baseAgent.js";

export function runRepositoryAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/repository.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}