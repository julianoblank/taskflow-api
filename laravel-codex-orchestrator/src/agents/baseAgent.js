import path from "node:path";
import { readText } from "../utils/fs.js";
import { runCodexExec } from "../utils/codexRunner.js";

function interpolate(template, vars) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return String(vars[key] ?? "");
  });
}

export function createPromptFromFiles({ promptFile, sharedFiles = [], vars = {} }) {
  const sharedContent = sharedFiles
    .map((f) => {
      const content = readText(f);
      return `\n\n## Conteúdo de ${path.basename(f)}\n${content}`;
    })
    .join("\n");

  const promptTemplate = readText(promptFile);
  return interpolate(`${promptTemplate}\n${sharedContent}`, vars);
}

export function runPromptAgent(ctx, config) {
  const prompt = createPromptFromFiles({
    promptFile: config.promptFile,
    sharedFiles: config.sharedFiles ?? [],
    vars: {
      projectName: ctx.project.name,
      projectType: ctx.project.type,
      ...ctx.vars,
      ...(config.vars ?? {})
    }
  });

  return runCodexExec({
    projectRoot: ctx.project.projectRoot,
    prompt,
    approvalMode: ctx.codex.approvalMode,
    skipGitRepoCheck: ctx.codex.skipGitRepoCheck,
    extraArgs: ctx.codex.extraArgs ?? []
  });
}