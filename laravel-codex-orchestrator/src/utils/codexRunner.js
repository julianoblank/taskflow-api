import { spawnSync } from "node:child_process";

function resolveCodexCommand() {
  // Permite customizar: CODEX_BIN="npx -y codex"
  if (process.env.CODEX_BIN) {
    // Ex.: "npx -y codex"
    const parts = process.env.CODEX_BIN.split(" ");
    return { cmd: parts[0], baseArgs: parts.slice(1) };
  }

  // Padrão: codex no PATH
  return { cmd: "codex", baseArgs: [] };
}

export function runCodexExec({
  projectRoot,
  prompt,
  approvalMode = "never",
  skipGitRepoCheck = true,
  extraArgs = [],
  env = {},
}) {
  const { cmd, baseArgs } = resolveCodexCommand();

  const args = [
    ...baseArgs,
    "exec",
    "--cd", projectRoot,
    "-c", `approval_policy=${approvalMode}`,
    "--sandbox", "workspace-write",
    ...(skipGitRepoCheck ? ["--skip-git-repo-check"] : []),
    ...extraArgs,
    prompt
  ];

  const result = spawnSync(cmd, args, {
    encoding: "utf-8",
    stdio: "pipe",
    env: { ...process.env, ...env }
  });

  return {
    ok: result.status === 0,
    code: result.status ?? 1,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
    command: [cmd, ...args].join(" ")
  };
}