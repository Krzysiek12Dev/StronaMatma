interface Props {
  zadanie: Zadanie;
  onAnswer: (index: number) => void;
}

export default function TestQuestion({ zadanie, onAnswer }: Props) {
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
          <li key={i}>
            <button
              className="test-option"
              onClick={() => onAnswer(i)}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
