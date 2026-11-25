import { mkdirSync, writeFileSync } from "node:fs";

// The GPS's excuse, in its own voice: smug, defensive, blaming the map.
// One line, plain text, well under the 200-character gate.
const LINE =
  "The map swore there was a bridge across that lake, so I took us swimming \u2014 I follow maps, not water.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
