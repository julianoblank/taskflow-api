import { runPromptAgent } from "./baseAgent.js";

export function runControllerAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/controller.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}