// Everyday Wonder, Two Days to Find the Line.
// One sentence, at most 200 characters, about a small moment of wonder
// in everyday life. This program writes that sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The washing machine stopped, and my socks came out of the spin holding on to each other like survivors of the same small storm.";

// The gate only accepts UTF-8 text of 1 to 200 characters, so refuse
// to write anything outside that range rather than submit an invalid file.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`${ENTRY.length} chars written to /output/entry.txt`);
