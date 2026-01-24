"use client";

import { useState } from "react";
import "../styles/cards.css";

interface Props {
  question: string;
  image?: string;
  options: string[];
  correct: number;
}

export default function ZadanieABCD({ question, image, options, correct }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    
    <div className="zadanie">
      <p className="question">{question}</p>
      

      {image && (
        <div className="task-image">
          <img src={image} alt="Ilustracja do zadania" />
        </div>
      )}

      <div className="answers">
        {options.map((opt, idx) => {
          let className = "answer";
          if (selected !== null) {
            if (idx === correct) className += " correct";
            else if (idx === selected) className += " wrong";
          }

          return (
            <button key={idx} className={className} onClick={() => setSelected(idx)}>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <p className="feedback">
          {selected === correct ? "✅ Dobra odpowiedź" : "❌ Spróbuj jeszcze raz"}
        </p>
      )}
    </div>
    
  );

 

}
