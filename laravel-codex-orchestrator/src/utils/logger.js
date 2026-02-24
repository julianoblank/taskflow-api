import fs from "node:fs";
import path from "node:path";

const LOG_DIR = path.resolve(".logs");

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function writeFileSafe(filename, content) {
  ensureLogDir();
  fs.writeFileSync(path.join(LOG_DIR, filename), content, "utf-8");
}

function ts() {
  return new Date().toISOString();
}

export function info(message) {
  console.log(`[INFO] ${message}`);
}

export function warn(message) {
  console.warn(`[WARN] ${message}`);
}

export function error(message) {
  console.error(`[ERRO] ${message}`);
}

export function saveStepLog(stepName, payload) {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const file = `${stamp}__${stepName}.log`;
  writeFileSafe(file, payload);
  return file;
}