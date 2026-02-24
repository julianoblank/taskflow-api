import path from "node:path";
import { readJson } from "./utils/fs.js";
import { info, error, warn, saveStepLog } from "./utils/logger.js";

import { runPlannerAgent } from "./agents/plannerAgent.js";
import { runDatabaseAgent } from "./agents/databaseAgent.js";
import { runRepositoryAgent } from "./agents/repositoryAgent.js";
import { runServiceAgent } from "./agents/serviceAgent.js";
import { runHttpAgent } from "./agents/httpAgent.js";
import { runTestAgent } from "./agents/testAgent.js";
import { runDocsAgent } from "./agents/docsAgent.js";
import { runReviewAgent } from "./agents/reviewAgent.js";
import { runModelAgent } from "./agents/modelAgent.js";
import { runRequestAgent } from "./agents/requestAgent.js";
import { runControllerAgent } from "./agents/controllerAgent.js";

const AGENT_MAP = {
  planner: runPlannerAgent,
  database: runDatabaseAgent,
  model: runModelAgent,
  repository: runRepositoryAgent,
  service: runServiceAgent,
  request: runRequestAgent,
  controller: runControllerAgent,
  http: runHttpAgent,
  tests: runTestAgent,
  docs: runDocsAgent,
  review: runReviewAgent
};

function printHeader(task) {
  info(`Task carregada: ${task.meta?.name ?? "sem nome"}`);
  info(`Projeto alvo: ${task.project.projectRoot}`);
  info(`Pipeline: ${task.pipeline.join(" -> ")}`);
}

function normalizeTask(task) {
  return {
    meta: task.meta ?? {},
    project: {
      name: task.project?.name ?? "taskflow-api",
      type: task.project?.type ?? "laravel-api",
      projectRoot: task.project?.projectRoot ?? "../taskflow-api"
    },
    codex: {
      approvalMode: task.codex?.approvalMode ?? "never",
      skipGitRepoCheck: task.codex?.skipGitRepoCheck ?? true,
      extraArgs: task.codex?.extraArgs ?? []
    },
    pipeline: task.pipeline ?? ["planner", "database", "repository", "service", "http", "tests", "docs", "review"],
    vars: task.vars ?? {}
  };
}

function buildContext(task) {
  return {
    project: task.project,
    codex: task.codex,
    vars: task.vars
  };
}

function formatStepLog(stepName, result) {
  return [
    `STEP: ${stepName}`,
    `OK: ${result.ok}`,
    `CODE: ${result.code}`,
    `COMMAND: ${result.command}`,
    "",
    "=== STDOUT ===",
    result.stdout || "",
    "",
    "=== STDERR ===",
    result.stderr || ""
  ].join("\n");
}

function runPipeline(task) {
  const ctx = buildContext(task);

  for (const stepName of task.pipeline) {
    const runner = AGENT_MAP[stepName];

    if (!runner) {
      warn(`Etapa desconhecida ignorada: ${stepName}`);
      continue;
    }

    info(`[${stepName}] iniciado`);
    const result = runner(ctx);

    const logFile = saveStepLog(stepName, formatStepLog(stepName, result));
    info(`[${stepName}] log salvo em .logs/${path.basename(logFile)}`);

    if (!result.ok) {
      error(`[${stepName}] falhou com código ${result.code}`);
      if (result.stderr) error(result.stderr.trim());
      if (!result.stderr && result.stdout) error(result.stdout.trim());
      process.exit(result.code || 1);
    }

    info(`[${stepName}] concluído`);
    if (result.stdout?.trim()) {
      console.log(result.stdout.trim());
    }
  }

  info("Execução finalizada com sucesso.");
}

function main() {
  const taskFile = process.argv[2];
  if (!taskFile) {
    error("Uso: node src/index.js tasks/taskflow-laravel.json");
    process.exit(1);
  }

  const rawTask = readJson(taskFile);
  const task = normalizeTask(rawTask);

  printHeader(task);
  runPipeline(task);
}

main();