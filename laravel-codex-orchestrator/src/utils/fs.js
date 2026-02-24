import fs from "node:fs";
import path from "node:path";

export function readJson(filePath) {
  const full = path.resolve(filePath);
  const raw = fs.readFileSync(full, "utf-8");
  return JSON.parse(raw);
}

export function readTextIfExists(filePath) {
  const full = path.resolve(filePath);
  if (!fs.existsSync(full)) return "";
  return fs.readFileSync(full, "utf-8");
}

export function readText(filePath) {
  const full = path.resolve(filePath);
  return fs.readFileSync(full, "utf-8");
}