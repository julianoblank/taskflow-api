import { runPromptAgent } from "./baseAgent.js";

export function runDatabaseAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/database.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}