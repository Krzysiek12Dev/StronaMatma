"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import TestQuestion from "@/components/TestQuestion";
import TestReview from "@/components/TestReview";
import { zadania } from "@/data/zadania";
import "@/styles/tests.css";
import "@/styles/dotest.css";
import { useAuth } from "@/components/AuthProvider";



const EGZAMIN_MAP: Record<string, string> = {
  "egzamin-8klasisty": "Egzamin ósmoklasisty",
  "matura-podstawowa": "Matura",
  "matura-rozszerzona": "Matura"
};

export default function TestPage() {
  const params = useParams();
  const router = useRouter();

  const egzaminSlug = params.egzamin as string;
  const dzialSlug = params.dzial as string;

  const egzaminName = EGZAMIN_MAP[egzaminSlug];

  const [questions, setQuestions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  // 🔐 tymczasowo – później podepniesz auth
 // const isPremium = false;
 const { user } = useAuth();
const isPremium = user?.isPremium ?? false;


  useEffect(() => {
    const filtered = zadania.filter(z =>
      z.egzamin === egzaminName &&
      z.dzial.toLowerCase() === dzialSlug.toLowerCase()
    );

    const shuffled = [...filtered].sort(() => Math.random() - 0.5);

    setQuestions(shuffled.slice(0, 5));
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
  }, [egzaminSlug, dzialSlug, egzaminName]);

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
        {/* <Header /> */}
        <main className="tests-container">
          <p>Brak pytań dla tego działu.</p>
        </main>
      </>
    );
  }

  return (
    <>
      {/* <Header /> */}

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
          <>
            {/* WYNIK */}
            <div className="test-result">
              <h2>Wynik</h2>
              <p>
                {score} / {questions.length}
              </p>

              <button
                className="button-return-test"
                onClick={() => router.push("/testy")}
              >
                Wróć do testów
              </button>
            </div>
          <p></p>
            {/* PODGLĄD PYTAŃ + ROZWIĄZAŃ */}
            <TestReview
              questions={questions}
              answers={answers}
              isPremium={isPremium}
            />
          </>
        )}
      </main>
    </>
  );
}
