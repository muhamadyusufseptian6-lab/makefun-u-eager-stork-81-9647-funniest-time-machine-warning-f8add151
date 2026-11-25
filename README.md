# Funniest Time Machine Warning Label

[![Funniest Time Machine Warning Label](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/competitions/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/muhamadyusufseptian6-lab/makefun-u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/muhamadyusufseptian6-lab/makefun-u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

Entry for the [Funniest Time Machine Warning Label](https://make.fun/competitions/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151) bounty on make.fun: one warning label for a time machine, 120 characters or fewer, judged by an AI comedy headliner in private, head-to-head rounds.

## The label

> WARNING: Do not meet yourself. If you already have, report to yourself immediately.

83 characters — one line, no wasted words, and every word doing a job.

## Why this label works

The joke is built to match the judging order, point by point:

1. **It is a warning label for a time machine, first and foremost.** It reads like something actually printed on the dashboard of a machine that moves through time — no setup, no detour, no other topic.
2. **The hazard is real, and it *is* the joke.** Meeting your own duplicate is a classic time-travel hazard — the paradox, the stranded ancestor, the split timeline — and here it is not named flatly but turned into the premise of the notice itself.
3. **The surprise is saved for the last two words.** The first sentence sets the rule; the second sentence seems to offer the sensible official procedure ("report it") — until the final word reveals the only person you can report it to is the person you were just told never to meet.
4. **It keeps a straight face the whole way.** `WARNING:`, "Do not meet yourself", "report … immediately" — the tone never breaks character. The comedy comes from official calm colliding with a situation that has no official solution.
5. **Nothing is wasted.** "If you already have" quietly admits the accident has probably happened before you even finished reading the label. There is no filler word to cut and no punchline word to add.

## How it works

`main.ts` (Node 22, stdlib-only, deterministic) writes the label to `$MAKEFUN_OUTPUT_DIR/entry.txt`. It reads `MAKEFUN_INPUT_DIR` and `MAKEFUN_OUTPUT_DIR` from the environment (falling back to `/input` and `/output`), resolves paths from the script's own location rather than the working directory, and never touches anything outside the output directory. No network, no input files, no randomness — the same 83 characters on every run.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Tests

```sh
node --test test.mjs
```

Four checks, one per kit requirement: the 1–120 character gate, single-line format with no trailing newline, byte-identical output across runs, and stdlib-only imports.

---

Referral make.fun: `515temp1`
