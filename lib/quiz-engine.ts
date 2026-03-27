import { AnswerKey } from "@/data/questions";
import { ProfileId, profiles } from "@/data/profiles";

// Perguntas pontuadas: Q1 a Q10 (10 perguntas × máx 3 pontos = 30 pontos máximo)
export function calculateScore(answers: Record<number, AnswerKey | string>): number {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    const answer = answers[i] as AnswerKey;
    if (!answer) continue;
    const scoreMap: Record<AnswerKey, number> = { A: 0, B: 1, C: 2, D: 3 };
    total += scoreMap[answer] ?? 0;
  }
  return total;
}

// Ranges para 30 pontos máximo
export function getScoreRange(score: number): 1 | 2 | 3 | 4 {
  if (score <= 7) return 1;
  if (score <= 15) return 2;
  if (score <= 22) return 3;
  return 4;
}

// Tiebreaker usa Q10 (obstáculo para receber a alma gêmea)
// C ou D = perfil A (medo/bloqueio interno); A ou B = perfil B (crença/reconhecimento)
export function getTiebreaker(q10Answer: AnswerKey): "A" | "B" {
  return q10Answer === "C" || q10Answer === "D" ? "A" : "B";
}

export function determineProfile(answers: Record<number, AnswerKey | string>): ProfileId {
  const score = calculateScore(answers);
  const range = getScoreRange(score);
  const q10 = answers[10] as AnswerKey;
  const tiebreaker = getTiebreaker(q10 || "A");
  return `${range}${tiebreaker}` as ProfileId;
}

export function getProfileSlug(profileId: ProfileId): string {
  const profile = profiles.find((p) => p.id === profileId);
  return profile?.slug ?? "amor-invisivel";
}
