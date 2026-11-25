// Angry Judge: The Short Rant Contest entry (Node 22, standard library
// only): writes one short, funny rant, at most 400 characters, about a
// broken printer, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The rant: a printer with one job and a PhD in excuses. It works the day
// nobody needs it, then on deadline morning it demands cyan for a
// black-and-white page and refers you to the manual, as if the manual is
// going to apologise. The anger is shared, not performed: everyone has
// replaced the cartridge, the cable and their patience for a $90 paperweight
// with a superiority complex.
// Verified by running the program: the output is within 400 characters.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "My printer has one job and a PhD in excuses: it prints fine the day I don't need it, then on deadline morning it blinks orange, claims it's out of cyan — CYAN — for a black-and-white document, and says 'check the manual', as if the manual is going to apologise. I have replaced the cartridge, the cable and my patience, and it still sits there humming, a $90 paperweight with a superiority complex.",
);
