import { runPromptAgent } from "./baseAgent.js";

export function runServiceAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/service.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}