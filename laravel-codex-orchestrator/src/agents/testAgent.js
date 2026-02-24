import { runPromptAgent } from "./baseAgent.js";

export function runTestAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/tests.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}