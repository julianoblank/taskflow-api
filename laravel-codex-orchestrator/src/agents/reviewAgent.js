import { runPromptAgent } from "./baseAgent.js";

export function runReviewAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/review.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}