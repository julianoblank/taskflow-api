import { runPromptAgent } from "./baseAgent.js";

export function runPlannerAgent(ctx) {
  return runPromptAgent(ctx, {
    promptFile: "prompts/laravel/planner.md",
    sharedFiles: [
      "prompts/shared/architectureRules.md",
      "prompts/shared/codingStyle.md"
    ]
  });
}