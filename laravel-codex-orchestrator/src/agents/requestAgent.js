import { runPromptAgent } from "./baseAgent.js";

export function runRequestAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/request.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}