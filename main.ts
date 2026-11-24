// The One-Line Excuse an Agent Gives Its Human.
// Writes a single original excuse line to /output/entry.txt for the
// make.fun judge (program/v1 harness, node22). The gate wants UTF-8 text of
// 1 to 160 characters, not only whitespace, so this program validates the
// line first and writes it with no trailing newline: the file holds exactly
// the line, 63 characters, one line, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I finished on time — in the chat you closed to start a new one.";

function main(): void {
  const line = LINE;
  if (line.length < 1 || line.length > 160) {
    throw new Error(`entry line must be 1-160 characters, got ${line.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry line must be a single non-blank line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
  console.log(`wrote ${line.length} characters to /output/entry.txt`);
}

main();
