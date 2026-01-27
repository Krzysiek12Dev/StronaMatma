"use client";
import "../styles/tests.css";

interface Zadanie {
  question: string;
  options: string[];
  correct: number;
  image?: string;
}

interface Props {
  zadanie?: Zadanie;
  onAnswer: (index: number) => void;
}

export default function TestQuestion({ zadanie, onAnswer }: Props) {
  if (!zadanie) return null; // 🔑 KLUCZOWE

  return (
    <div className="card" style={{ padding: 16 }}>
      <p>{zadanie.question}</p>

      {zadanie.image && (
        <img
          src={zadanie.image}
          alt="Obrazek"
          style={{ maxWidth: "100%", margin: "12px 0" }}
        />
      )}

      <ul>
        {zadanie.options.map((opt, i) => (
          <li
            key={i}
            style={{ marginBottom: 8, cursor: "pointer" }}
            onClick={() => onAnswer(i)}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}
