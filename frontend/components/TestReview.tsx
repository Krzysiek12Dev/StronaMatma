"use client";

interface Props {
  questions: any[];
  answers: number[];
  isPremium: boolean;
}

export default function TestReview({ questions, answers, isPremium }: Props) {
  return (
    <div className="test-review">
      {questions.map((q, i) => {
        const userAnswer = answers[i];
        const correct = q.correct;

        return (
          <div key={i} className="review-card">
            <p className="review-question">
              {i + 1}. {q.question}
            </p>

            {q.image && (
              <img src={q.image} alt="" className="review-image" />
            )}

            <ul className="review-options">
              {q.options.map((opt: string, idx: number) => {
                let className = "review-option";

                if (idx === correct) className += " correct";
                if (idx === userAnswer && idx !== correct)
                  className += " wrong";

                return (
                  <li key={idx} className={className}>
                    {opt}
                  </li>
                );
              })}
            </ul>

            {/* ROZWIĄZANIE */}
            {q.showSolution && (
              <div className="solution-box">
                <p>{q.solutionText}</p>

                {isPremium ? (
                  <iframe
                    src={q.solutionVideo}
                    allowFullScreen
                    className="solution-video"
                  />
                ) : (
                  <div className="premium-lock">
                    🔒 To rozwiązanie jest dostępne w Premium  
                    <button className="button-primary">
                      Odblokuj Premium
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
