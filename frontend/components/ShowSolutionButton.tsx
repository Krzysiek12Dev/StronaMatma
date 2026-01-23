"use client";
import { useState } from "react";

interface Props {
  zad: {
    solutionText: string;
    solutionVideo?: string;
    isPremium: boolean;
    showSolution: boolean;
  };
  userIsPremium: boolean;
}

export default function ShowSolutionButton({ zad, userIsPremium }: Props) {
  const [visible, setVisible] = useState(false);

  // Jeśli zadanie jest premium i użytkownik nie ma dostępu → przycisk zablokowany
  const canShow = !zad.isPremium || userIsPremium || zad.showSolution;

  return (
    <div style={{ marginTop: "10px" }}>
      <button
        onClick={() => setVisible(true)}
        disabled={!canShow}
        style={{
          padding: "6px 12px",
          borderRadius: "8px",
          backgroundColor: canShow ? "#60a5fa" : "#d1d5db",
          color: "white",
          border: "none",
          cursor: canShow ? "pointer" : "not-allowed",
          marginBottom: "6px",
        }}
      >
        {visible ? "Rozwiązanie widoczne" : "Pokaż rozwiązanie"}
      </button>

      {visible && canShow && (
        <div style={{ marginTop: "8px", backgroundColor: "#f3f4f6", padding: "10px", borderRadius: "8px" }}>
          <p>{zad.solutionText}</p>
          {zad.solutionVideo && (
            <iframe
              width="100%"
              height="200"
              src={zad.solutionVideo}
              title="Rozwiązanie"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}

      {!canShow && <p style={{ color: "#f87171" }}>🔒 Materiał premium – wykup dostęp</p>}
    </div>
  );
}
