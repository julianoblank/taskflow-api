import { runPromptAgent } from "./baseAgent.js";

export function runModelAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/model.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}