"use client";
import "../styles/dotest.css";

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
  if (!zadanie) return null;

  return (
    <div className="test-question">
      <p>{zadanie.question}</p>

      {zadanie.image && (
        <img src={zadanie.image} alt="Obrazek" />
      )}

      <ul className="test-options">
        {zadanie.options.map((opt, i) => (
          <li
            key={i}
            className="test-option"
            onClick={() => onAnswer(i)}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}

