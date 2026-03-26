import { AnswerKey } from "@/data/questions";
import { ProfileId, profiles } from "@/data/profiles";

// Perguntas pontuadas: Q2 a Q7 (6 perguntas × máx 3 pontos = 18 pontos máximo)
export function calculateScore(answers: Record<number, AnswerKey | string>): number {
  let total = 0;
  for (let i = 2; i <= 7; i++) {
    const answer = answers[i] as AnswerKey;
    if (!answer) continue;
    const scoreMap: Record<AnswerKey, number> = { A: 0, B: 1, C: 2, D: 3 };
    total += scoreMap[answer] ?? 0;
  }
  return total;
}

// Ranges ajustados para 18 pontos máximo
export function getScoreRange(score: number): 1 | 2 | 3 | 4 {
  if (score <= 4) return 1;
  if (score <= 9) return 2;
  if (score <= 14) return 3;
  return 4;
}

// Tiebreaker usa Q6 (homem bom sem tesão) — C ou D = tiebreaker A
export function getTiebreaker(p6Answer: AnswerKey): "A" | "B" {
  return p6Answer === "C" || p6Answer === "D" ? "A" : "B";
}

export function determineProfile(answers: Record<number, AnswerKey | string>): ProfileId {
  const score = calculateScore(answers);
  const range = getScoreRange(score);
  const p6 = answers[6] as AnswerKey;
  const tiebreaker = getTiebreaker(p6 || "A");
  return `${range}${tiebreaker}` as ProfileId;
}

export function getProfileSlug(profileId: ProfileId): string {
  const profile = profiles.find((p) => p.id === profileId);
  return profile?.slug ?? "padrao-oculto";
}
