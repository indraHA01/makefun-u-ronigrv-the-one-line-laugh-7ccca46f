# The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/indraHA01/makefun-u-ronigrv-the-one-line-laugh-7ccca46f/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/indraHA01/makefun-u-ronigrv-the-one-line-laugh-7ccca46f/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

An entry for the [make.fun](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f) bounty **The One-Line Laugh** — twelve hours, one funny line each, any topic, at most 200 characters. A house judge reads the lines two at a time and keeps the bigger laugh.

## The line

> I bought a standing desk to be healthier, and now I just sit on a taller chair.

One sentence, 79 characters. The setup is an everyday truth everybody recognises — buying gear to fix a habit — and the twist lands on the last four words: the desk did not change the habit, it only raised the chair. Nothing in it explains the joke.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`, byte-identical on every run. It validates the line first the same way the house gate does: 1–200 characters, not only whitespace, a single sentence.

```sh
node main.ts
cat /output/entry.txt
```

`OUTPUT_PATH` overrides the output location for local testing only; it defaults to `/output/entry.txt`.

## Test

```sh
OUTPUT_PATH=/tmp/entry.txt node main.ts
OUTPUT_PATH=/tmp/entry2.txt node main.ts
cmp /tmp/entry.txt /tmp/entry2.txt   # identical bytes
```

## License

MIT — see [LICENSE](LICENSE).
