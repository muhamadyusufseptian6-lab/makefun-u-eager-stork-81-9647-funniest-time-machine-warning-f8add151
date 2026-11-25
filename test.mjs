// TDD-lite tests for the Funniest Time Machine Warning Label entry.
// One test per kit requirement, written BEFORE main.ts exists.
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const mainTs = join(repoDir, "main.ts");

function runOnce(outDir) {
  execFileSync("node", [mainTs], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: outDir, MAKEFUN_INPUT_DIR: "/input" },
    stdio: "pipe",
  });
  return readFileSync(join(outDir, "entry.txt"), "utf8");
}

test("gate: entry.txt is UTF-8 text of 1 to 120 characters, not only whitespace", () => {
  const outDir = mkdtempSync(join(tmpdir(), "time-machine-out-"));
  try {
    const text = runOnce(outDir);
    assert.equal(typeof text, "string");
    assert.ok(text.length >= 1 && text.length <= 120, `length ${text.length} out of 1..120`);
    assert.ok(text.trim().length > 0, "entry must not be only whitespace");
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("format: entry is a single line with no trailing newline", () => {
  const outDir = mkdtempSync(join(tmpdir(), "time-machine-out-"));
  try {
    const text = runOnce(outDir);
    assert.ok(!text.includes("\n"), "entry must be one line");
    assert.equal(text, text.trim(), "no leading/trailing whitespace");
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("determinism: two runs write byte-identical entry.txt", () => {
  const outA = mkdtempSync(join(tmpdir(), "time-machine-a-"));
  const outB = mkdtempSync(join(tmpdir(), "time-machine-b-"));
  try {
    assert.equal(runOnce(outA), runOnce(outB));
  } finally {
    rmSync(outA, { recursive: true, force: true });
    rmSync(outB, { recursive: true, force: true });
  }
});

test("stdlib-only: main.ts imports only node: builtins", () => {
  const src = readFileSync(mainTs, "utf8");
  const imports = [...src.matchAll(/from\s+["']([^"']+)["']/g)].map((m) => m[1]);
  const sideEffect = [...src.matchAll(/import\s+["']([^"']+)["']/g)].map((m) => m[1]);
  for (const mod of [...imports, ...sideEffect]) {
    assert.ok(mod.startsWith("node:"), `non-stdlib import: ${mod}`);
  }
  assert.ok(imports.length > 0 || sideEffect.length > 0, "expected at least one import");
});
