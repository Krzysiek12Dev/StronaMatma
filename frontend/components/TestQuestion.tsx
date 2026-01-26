"use client";

import { FC } from "react";

interface TestQuestionProps {
  question: string;
  options: string[];
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
}

const TestQuestion: FC<TestQuestionProps> = ({
  question,
  options,
  selectedOption,
  onSelectOption
}) => {
  return (
    <div className="card">
      <p style={{ fontWeight: 600 }}>{question}</p>
      <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {options.map((opt, i) => (
          <button
            key={i}
            className={`button-primary ${selectedOption === i ? "active" : ""}`}
            onClick={() => onSelectOption(i)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestQuestion;
