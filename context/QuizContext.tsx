"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { AnswerKey } from "@/data/questions";
import { ProfileId } from "@/data/profiles";
import { determineProfile, getProfileSlug } from "@/lib/quiz-engine";
import { VenusSign } from "@/lib/venus-calculator";

interface QuizState {
  currentQuestion: number;
  answers: Record<number, AnswerKey | string>;
  // Dados de nascimento
  birthDate: string | null;      // "DD/MM/YYYY"
  birthTime: string | null;      // "HH:MM"
  birthCity: string | null;      // nome da cidade
  birthTimezone: string | null;  // "America/Sao_Paulo"
  // Resultado de Vênus
  venusSign: VenusSign | null;
  venusLoading: boolean;
  // Resultado do quiz
  score: number | null;
  profileId: ProfileId | null;
  profileSlug: string | null;
  isComplete: boolean;
  // Lead
  leadName: string | null;
  leadEmail: string | null;
}

type QuizAction =
  | { type: "ANSWER_QUESTION"; questionId: number; answer: AnswerKey }
  | {
      type: "SET_BIRTH_DATA";
      date: string;
      time: string;
      city: string;
      timezone: string;
    }
  | { type: "SET_VENUS_SIGN"; sign: VenusSign }
  | { type: "SET_VENUS_LOADING"; loading: boolean }
  | { type: "SET_LEAD"; name: string; email: string }
  | { type: "NEXT_QUESTION" }
  | { type: "COMPLETE_QUIZ" }
  | { type: "RESTORE"; state: QuizState }
  | { type: "RESET" };

const initialState: QuizState = {
  currentQuestion: 1,
  answers: {},
  birthDate: null,
  birthTime: null,
  birthCity: null,
  birthTimezone: null,
  venusSign: null,
  venusLoading: false,
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

    case "SET_BIRTH_DATA":
      return {
        ...state,
        birthDate: action.date,
        birthTime: action.time,
        birthCity: action.city,
        birthTimezone: action.timezone,
        venusLoading: true,
        currentQuestion: 1,
      };

    case "SET_VENUS_SIGN":
      return { ...state, venusSign: action.sign, venusLoading: false };

    case "SET_VENUS_LOADING":
      return { ...state, venusLoading: action.loading };

    case "ANSWER_QUESTION": {
      const newAnswers = { ...state.answers, [action.questionId]: action.answer };
      const isLast = action.questionId === 10;
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

const STORAGE_KEY = "mag_quiz_state";

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

  // Chama a API de Vênus quando os dados de nascimento são definidos
  useEffect(() => {
    if (!state.birthDate || !state.birthTime || !state.birthTimezone || state.venusSign) return;
    if (!state.venusLoading) return;

    async function fetchVenus() {
      try {
        const res = await fetch("/api/venus", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            date: state.birthDate,
            time: state.birthTime,
            timezone: state.birthTimezone,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          dispatch({ type: "SET_VENUS_SIGN", sign: data.sign });
        } else {
          dispatch({ type: "SET_VENUS_LOADING", loading: false });
        }
      } catch {
        dispatch({ type: "SET_VENUS_LOADING", loading: false });
      }
    }

    fetchVenus();
  }, [state.birthDate, state.birthTime, state.birthTimezone, state.venusLoading, state.venusSign]);

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
