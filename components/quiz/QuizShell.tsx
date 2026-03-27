"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import { questions } from "@/data/questions";
import { AnswerKey } from "@/data/questions";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { AnswerOption } from "@/components/quiz/AnswerOption";
import { SocialProof } from "@/components/quiz/SocialProof";
import { LeadCapture } from "@/components/quiz/LeadCapture";
import { Button } from "@/components/ui/Button";
import { StarField } from "@/components/ui/StarField";

const LOADING_STEPS = [
  "Localizando a posição de Vênus no momento do seu nascimento...",
  "Calculando sua longitude natal com precisão sideral...",
  "Identificando seu padrão de atração único...",
  "Mapeando o perfil da sua alma gêmea...",
  "Seu Mapa da Alma Gêmea está pronto.",
];

const PHASE_LABELS: Record<string, string> = {
  wound: "A ferida",
  pattern: "O padrão",
  shadow: "A sombra",
  desire: "O desejo",
  mirror: "O espelho",
  fear: "O medo",
  entry: "Entrada",
};

export function QuizShell() {
  const { state, dispatch } = useQuiz();
  const router = useRouter();
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [selected, setSelected] = useState<AnswerKey | null>(null);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Se já temos lead salvo no contexto (restaurado do localStorage), pula a Tela 0
  useEffect(() => {
    if (state.leadName && state.leadEmail) {
      setLeadCaptured(true);
    }
  }, [state.leadName, state.leadEmail]);

  // Redireciona ao concluir com loading animado
  useEffect(() => {
    if (!state.isComplete) return;
    setIsAnalyzing(true);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < LOADING_STEPS.length) {
        setLoadingStep(step);
      } else {
        clearInterval(interval);
        router.push("/resultado-parcial");
      }
    }, 1100);
    return () => clearInterval(interval);
  }, [state.isComplete, router]);

  // Reset selected ao mudar de pergunta
  useEffect(() => {
    setSelected(null);
    setShowSocialProof(false);
  }, [state.currentQuestion]);

  function handleLeadContinue(params: {
    name: string;
    email: string;
    birthDate: string;
    birthTime: string;
    birthCity: string;
    birthTimezone: string;
  }) {
    dispatch({ type: "SET_LEAD", name: params.name, email: params.email });
    dispatch({
      type: "SET_BIRTH_DATA",
      date: params.birthDate,
      time: params.birthTime,
      city: params.birthCity,
      timezone: params.birthTimezone,
    });
    setLeadCaptured(true);
  }

  const currentQ = questions.find((q) => q.id === state.currentQuestion);

  if (!leadCaptured) {
    return <LeadCapture onContinue={handleLeadContinue} />;
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-bg-deep flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <StarField count={100} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(155,110,168,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 text-center space-y-8 w-full max-w-sm">
          {/* Spinner cósmico */}
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-gold/10" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin" />
            <div className="absolute inset-2 rounded-full border border-amethyst/20 border-b-amethyst animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gold text-lg">♀</span>
            </div>
          </div>

          <div className="space-y-3">
            <AnimatePresence mode="wait">
              <motion.p
                key={loadingStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="font-display text-lg text-gold leading-snug"
              >
                {LOADING_STEPS[loadingStep]}
              </motion.p>
            </AnimatePresence>
            {state.venusSign && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-sans text-sm text-text-muted"
              >
                Vênus em {state.venusSign} · {state.leadName}
              </motion.p>
            )}
          </div>

          {/* Barra de progresso do loading */}
          <div className="w-full bg-gold/10 rounded-full h-0.5">
            <motion.div
              className="bg-gold h-0.5 rounded-full"
              animate={{ width: `${((loadingStep + 1) / LOADING_STEPS.length) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  const questionNumber = currentQ.id;
  const totalQuestions = questions.length;

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
            <p className="font-sans text-xs text-amethyst uppercase tracking-widest">
              {PHASE_LABELS[currentQ.phase] ?? currentQ.phase}
            </p>

            {/* Pergunta */}
            <h2 className="font-serif text-xl md:text-2xl text-text-primary leading-snug">
              {currentQ.text}
            </h2>

            {/* Opções */}
            <div className="space-y-3">
              {currentQ.answers.map((answer) => (
                <AnswerOption
                  key={answer.key}
                  answerKey={answer.key}
                  text={answer.text}
                  selected={selected === answer.key}
                  onSelect={handleAnswer}
                />
              ))}
            </div>

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

            {/* Botão continuar */}
            {selected && (
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
          Seja honesta. Não existe resposta certa ou errada.
        </p>
      </div>
    </div>
  );
}
