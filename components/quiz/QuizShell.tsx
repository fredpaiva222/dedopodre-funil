"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import { questions } from "@/data/questions";
import { AnswerKey } from "@/data/questions";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { AnswerOption } from "@/components/quiz/AnswerOption";
import { DateBirthInput } from "@/components/quiz/DateBirthInput";
import { SocialProof } from "@/components/quiz/SocialProof";
import { Button } from "@/components/ui/Button";
import { StarField } from "@/components/ui/StarField";

export function QuizShell() {
  const { state, dispatch } = useQuiz();
  const router = useRouter();
  const [selected, setSelected] = useState<AnswerKey | null>(null);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const currentQ = questions.find((q) => q.id === state.currentQuestion);

  // Redireciona ao concluir
  useEffect(() => {
    if (state.isComplete) {
      setIsAnalyzing(true);
      const timer = setTimeout(() => {
        router.push("/resultado-parcial");
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [state.isComplete, router]);

  // Reset selected ao mudar de pergunta
  useEffect(() => {
    setSelected(null);
    setShowSocialProof(false);
  }, [state.currentQuestion]);

  if (!currentQ) return null;

  function handleAnswer(key: AnswerKey) {
    setSelected(key);
    if (currentQ?.socialProofAfter) {
      setShowSocialProof(true);
    }
  }

  function handleConfirmAnswer() {
    if (!selected) return;
    dispatch({ type: "ANSWER_QUESTION", questionId: currentQ!.id, answer: selected });
  }

  function handleDateConfirm(date: string) {
    dispatch({ type: "SET_BIRTH_DATE", date });
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-bg-deep flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <StarField count={80} />
        <div className="relative z-10 text-center space-y-6">
          <div className="w-16 h-16 mx-auto border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
          <p className="font-display text-2xl text-gold">Calculando sua análise...</p>
          <p className="font-sans text-sm text-text-muted">
            Combinando Vênus em {state.venusSign} com seu padrão emocional
          </p>
        </div>
      </div>
    );
  }

  const questionNumber = currentQ.id === 1 ? 1 : currentQ.id;
  const totalQuestions = questions.length;

  return (
    <div className="min-h-screen bg-bg-deep flex flex-col relative overflow-hidden">
      <StarField count={40} />

      {/* Header com progresso */}
      <div className="relative z-10 px-6 pt-8 pb-4 max-w-lg mx-auto w-full">
        <ProgressBar current={questionNumber} total={totalQuestions} />
      </div>

      {/* Conteúdo da pergunta */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-4 max-w-lg mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Fase label */}
            <p className="font-sans text-xs text-text-muted uppercase tracking-widest">
              {currentQ.phase === "neutral" && "Contexto"}
              {currentQ.phase === "recognition" && "Reconhecimento"}
              {currentQ.phase === "mirror" && "Espelho"}
              {currentQ.phase === "final" && "Revelação"}
            </p>

            {/* Pergunta */}
            <h2 className="font-serif text-xl md:text-2xl text-text-primary leading-snug">
              {currentQ.text}
            </h2>

            {/* Input de data ou opções */}
            {currentQ.type === "date" ? (
              <DateBirthInput onConfirm={handleDateConfirm} />
            ) : (
              <div className="space-y-3">
                {currentQ.answers?.map((answer) => (
                  <AnswerOption
                    key={answer.key}
                    answerKey={answer.key}
                    text={answer.text}
                    selected={selected === answer.key}
                    onSelect={handleAnswer}
                  />
                ))}
              </div>
            )}

            {/* Prova social pós-resposta */}
            {showSocialProof && currentQ.socialProofAfter && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <SocialProof data={currentQ.socialProofAfter} />
              </motion.div>
            )}

            {/* Botão continuar (só para perguntas de múltipla escolha) */}
            {currentQ.type === "multiple" && selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: showSocialProof ? 0.5 : 0.1 }}
              >
                <Button
                  variant="gold"
                  size="lg"
                  fullWidth
                  onClick={handleConfirmAnswer}
                >
                  Continuar →
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="relative z-10 px-6 pb-8 max-w-lg mx-auto w-full">
        <p className="font-sans text-xs text-text-muted text-center">
          Seja honesta. Não existe resposta errada.
        </p>
      </div>
    </div>
  );
}
