// Funniest Time Machine Warning Label — make.fun entry.
// Writes a single one-line warning label to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib-only, deterministic: the same constant text every run.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "WARNING: Do not meet yourself. If you already have, report to yourself immediately.";

// The entry text is the joke itself: a genuine-looking safety notice about
// the real hazard of meeting your own duplicate, with the punchline —
// reporting the incident to the very person you must not meet — saved for
// the last two words.
// Resolve the repository directory from this script's own location, never
// from the working directory. The entry needs no input files, but the input
// directory is honoured the same way the kit documents it.
const repoDir = dirname(fileURLToPath(import.meta.url));
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void repoDir;
void inputDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Written exactly as-is: no trailing newline, so the entry stays one line
// and its length is exactly the 83 characters of the label itself.
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
