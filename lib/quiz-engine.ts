import { AnswerKey } from "@/data/questions";
import { ProfileId, profiles } from "@/data/profiles";

export function calculateScore(answers: Record<number, AnswerKey | string>): number {
  let total = 0;
  for (let i = 2; i <= 10; i++) {
    const answer = answers[i] as AnswerKey;
    if (!answer) continue;
    const scoreMap: Record<AnswerKey, number> = { A: 0, B: 1, C: 2, D: 3 };
    total += scoreMap[answer] ?? 0;
  }
  return total;
}

export function getScoreRange(score: number): 1 | 2 | 3 | 4 {
  if (score <= 7) return 1;
  if (score <= 15) return 2;
  if (score <= 23) return 3;
  return 4;
}

export function getTiebreaker(p7Answer: AnswerKey): "A" | "B" {
  return p7Answer === "C" || p7Answer === "D" ? "A" : "B";
}

export function determineProfile(answers: Record<number, AnswerKey | string>): ProfileId {
  const score = calculateScore(answers);
  const range = getScoreRange(score);
  const p7 = answers[7] as AnswerKey;
  const tiebreaker = getTiebreaker(p7 || "A");
  return `${range}${tiebreaker}` as ProfileId;
}

export function getProfileSlug(profileId: ProfileId): string {
  const profile = profiles.find((p) => p.id === profileId);
  return profile?.slug ?? "padrao-oculto";
}
