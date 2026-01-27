"use client";

import Link from "next/link";
import Header from "@/components/Header";
import "../../styles/tests.css";
// import TestQuestion from "./[egzamin]/components/TestQuestion";


const EGZAMINY = [
  {
    id: "egzamin-8klasisty",
    title: "Egzamin ósmoklasisty",
    description: "Klasy 4–8 • zadania zgodne z CKE",
    emoji: "🧒"
  },
  {
    id: "matura-podstawowa",
    title: "Matura – poziom podstawowy",
    description: "Zakres podstawowy • wszystkie działy",
    emoji: "🎓"
  },
  {
    id: "matura-rozszerzona",
    title: "Matura – poziom rozszerzony",
    description: "Dla ambitnych • trudniejsze zadania",
    emoji: "🚀"
  }
  
];

export default function TestyPage() {
  return (
    <>
      {/* <Header /> */}

      <main className="tests-container">
        <h1 className="tests-title">Testy sprawdzające</h1>
        <p className="tests-subtitle">
          Wybierz egzamin, aby sprawdzić swoją wiedzę
        </p>

        <div className="tests-grid">
          {EGZAMINY.map(egzamin => (
            <Link
              key={egzamin.id}
              href={`/testy/${egzamin.id}`}
              className="test-card"
            >
              <div className="test-emoji">{egzamin.emoji}</div>
              <h2>{egzamin.title}</h2>
              <p>{egzamin.description}</p>
              <span className="test-action">Rozpocznij →</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
