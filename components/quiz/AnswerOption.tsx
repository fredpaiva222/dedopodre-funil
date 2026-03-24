"use client";

import { clsx } from "clsx";
import { AnswerKey } from "@/data/questions";

interface AnswerOptionProps {
  answerKey: AnswerKey;
  text: string;
  selected: boolean;
  onSelect: (key: AnswerKey) => void;
}

export function AnswerOption({ answerKey, text, selected, onSelect }: AnswerOptionProps) {
  return (
    <button
      onClick={() => onSelect(answerKey)}
      className={clsx(
        "group w-full text-left p-4 rounded-sm border transition-all duration-200 cursor-pointer",
        "flex items-start gap-4 min-h-[56px]",
        selected
          ? "border-gold bg-gold/10 shadow-[0_0_20px_rgba(201,169,110,0.2)]"
          : "border-bg-card bg-bg-card/50 hover:border-amethyst/60 hover:bg-amethyst/5"
      )}
    >
      <span
        className={clsx(
          "flex-shrink-0 w-7 h-7 rounded-sm border text-xs font-bold font-sans flex items-center justify-center transition-all duration-200 mt-0.5",
          selected
            ? "border-gold bg-gold text-bg-deep"
            : "border-text-muted text-text-muted group-hover:border-amethyst group-hover:text-amethyst"
        )}
      >
        {answerKey}
      </span>
      <span
        className={clsx(
          "font-sans text-sm leading-relaxed transition-colors duration-200",
          selected ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
        )}
      >
        {text}
      </span>
    </button>
  );
}
