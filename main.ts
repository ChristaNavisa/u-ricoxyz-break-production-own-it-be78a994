import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I told the database to delete the test rows. It asked which ones. I said yes.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function writeEntry(outDir: string, line: string): void {
  validateLine(line);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

writeEntry(resolveOutDir(), LINE);
