"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { AnswerKey } from "@/data/questions";
import { ProfileId } from "@/data/profiles";
import { determineProfile, getProfileSlug } from "@/lib/quiz-engine";
import { calculateVenusSign, VenusSign } from "@/lib/venus-calculator";

interface QuizState {
  currentQuestion: number;
  answers: Record<number, AnswerKey | string>;
  birthDate: string | null;
  venusSign: VenusSign | null;
  score: number | null;
  profileId: ProfileId | null;
  profileSlug: string | null;
  isComplete: boolean;
  leadName: string | null;
  leadEmail: string | null;
}

type QuizAction =
  | { type: "ANSWER_QUESTION"; questionId: number; answer: AnswerKey }
  | { type: "SET_BIRTH_DATE"; date: string }
  | { type: "SET_LEAD"; name: string; email: string }
  | { type: "NEXT_QUESTION" }
  | { type: "COMPLETE_QUIZ" }
  | { type: "RESTORE"; state: QuizState }
  | { type: "RESET" };

const initialState: QuizState = {
  currentQuestion: 1,
  answers: {},
  birthDate: null,
  venusSign: null,
  score: null,
  profileId: null,
  profileSlug: null,
  isComplete: false,
  leadName: null,
  leadEmail: null,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SET_LEAD":
      return { ...state, leadName: action.name, leadEmail: action.email };
    case "SET_BIRTH_DATE": {
      const venusSign = calculateVenusSign(action.date);
      return {
        ...state,
        birthDate: action.date,
        venusSign,
        answers: { ...state.answers, 1: action.date },
        currentQuestion: 2,
      };
    }
    case "ANSWER_QUESTION": {
      const newAnswers = { ...state.answers, [action.questionId]: action.answer };
      const isLast = action.questionId === 7;
      if (isLast) {
        const profileId = determineProfile(newAnswers);
        const profileSlug = getProfileSlug(profileId);
        return {
          ...state,
          answers: newAnswers,
          profileId,
          profileSlug,
          isComplete: true,
        };
      }
      return {
        ...state,
        answers: newAnswers,
        currentQuestion: action.questionId + 1,
      };
    }
    case "NEXT_QUESTION":
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    case "COMPLETE_QUIZ": {
      const profileId = determineProfile(state.answers);
      const profileSlug = getProfileSlug(profileId);
      return { ...state, profileId, profileSlug, isComplete: true };
    }
    case "RESTORE":
      return action.state;
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

interface QuizContextValue {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
}

const QuizContext = createContext<QuizContextValue | null>(null);

const STORAGE_KEY = "sdp_quiz_state";

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Restaura do localStorage na montagem
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as QuizState;
        dispatch({ type: "RESTORE", state: parsed });
      }
    } catch {}
  }, []);

  // Persiste no localStorage a cada mudança
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz(): QuizContextValue {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used inside QuizProvider");
  return ctx;
}
