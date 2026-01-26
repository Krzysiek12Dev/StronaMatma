"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import TestQuestion from "@/components/TestQuestion";
import { zadania } from "@/data/zadania";
import "@/styles/tests.css";

export default function TestPage() {
  const params = useParams();
  const router = useRouter();

  const egzamin = params.egzamin as string;
  const dzial = params.dzial as string;

  const [questions, setQuestions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  // 🔁 LOSOWANIE TYLKO RAZ
  useEffect(() => {
    const filtered = zadania.filter(
      z => z.egzamin === egzamin && z.dzial.toLowerCase() === dzial
    );

    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 5)); // 🔑 DOKŁADNIE 5 PYTAŃ
  }, [egzamin, dzial]);

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const score = answers.filter(
    (ans, i) => ans === questions[i]?.correct
  ).length;

  if (!questions.length) {
    return (
      <>
        <Header />
        <main className="tests-container">
          <p>Brak pytań dla tego działu.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="tests-container">
        {!finished ? (
          <>
            <p className="test-progress">
              Pytanie {current + 1} / {questions.length}
            </p>

            <TestQuestion
              zadanie={questions[current]}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <div className="test-result">
            <h2>Wynik</h2>
            <p>
              {score} / {questions.length}
            </p>

            <button
              className="button-primary"
              onClick={() => router.push("/testy")}
            >
              Wróć do testów
            </button>
          </div>
        )}
      </main>
    </>
  );
}
