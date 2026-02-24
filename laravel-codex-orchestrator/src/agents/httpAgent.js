import { runPromptAgent } from "./baseAgent.js";

export function runHttpAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/http.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}