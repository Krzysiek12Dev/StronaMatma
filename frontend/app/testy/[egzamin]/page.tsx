"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import "../../../styles/tests.css";

// przykładowe działy dla egzaminów
const DZIALY: Record<string, { id: string; title: string }[]> = {
  "egzamin-8klasisty": [
    { id: "algebra", title: "Algebra" },
    { id: "geometria", title: "Geometria" },
    { id: "funkcje", title: "Funkcje" }
  ],
  "matura-podstawowa": [
    { id: "algebra", title: "Algebra" },
    { id: "analiza", title: "Analiza matematyczna" },
    { id: "geometria", title: "Geometria" }
  ],
  "matura-rozszerzona": [
    { id: "algebra", title: "Algebra" },
    { id: "analiza", title: "Analiza matematyczna" },
    { id: "geometria", title: "Geometria" },
    { id: "statystyka", title: "Statystyka" }
  ]
};

export default function DzialyPage() {
  const params = useParams();
 const egzaminId = Array.isArray(params.egzamin)
  ? params.egzamin[0]
  : params.egzamin;

  const dzialy = DZIALY[egzaminId] || [];

  return (
    <>
      <Header />

      <main className="tests-container">
        <h1 className="tests-title">Wybierz dział</h1>
        <p className="tests-subtitle">
          Egzamin: <strong>{egzaminId.replaceAll("-", " ")}</strong>
        </p>

        <div className="tests-grid">
          {dzialy.map(dz => (
            <Link
              key={dz.id}
              href={`/testy/${egzaminId}/${dz.id}`}
              className="test-card"
            >
              <h2>{dz.title}</h2>
              <span className="test-action">Rozpocznij →</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
