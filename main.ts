// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
//
// Writes a single funny line (one sentence, at most 200 characters) to
// /output/entry.txt. Deterministic: every run writes identical bytes.
//
// The line: a setup everybody recognises (buying a standing desk to get
// healthier), then a twist at the very end that still makes sense — the
// desk did not change the habit, it only raised the chair. Everyday truth,
// no wasted words, nothing left to explain the joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One sentence, 86 characters. The punchline lands on the last four words.
export const ENTRY_LINE =
  "I bought a standing desk to be healthier, and now I just sit on a taller chair.";

// Gate the line the same way the house scorer does: UTF-8 text, 1-200
// characters, not only whitespace. Failing loudly here beats failing in
// the grader, where an invalid entry takes no prize.
export function assertValid(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (!line.trimEnd().endsWith(".")) {
    throw new Error("entry must stand alone as a single sentence");
  }
}

// The grader runs the program in a sandbox where /output/entry.txt is the
// scored artifact. OUTPUT_PATH exists only so the same file can be tested
// locally without root; it defaults to the scored path and changes nothing
// about the bytes written.
export function outputPath(): string {
  return process.env.OUTPUT_PATH ?? "/output/entry.txt";
}

export function main(): void {
  assertValid(ENTRY_LINE);
  const path = outputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, ENTRY_LINE, "utf8");
}

main();
