"use client";

import { useState, useEffect } from "react";
import ZadanieABCD from "../components/ZadanieABCD";
import Button from "../components/Button";
import { zadania } from "../data/zadania";
import "../styles/buttons.css";
import "../styles/cards.css";

interface User {
  name: string;
  isPremium: boolean;
}

export default function Home() {
  const [selectedDzial, setSelectedDzial] = useState("Algebra");
  const [user, setUser] = useState<User | null>(null);
  const [visibleSolutions, setVisibleSolutions] = useState<Record<number, boolean>>({});

  /* ------------------ LOGOWANIE ------------------ */
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const userIsPremium = user?.isPremium ?? false;

  const handleKupDostep = () => {
    const newUser: User = { name: "Mateusz", isPremium: true };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const handleWyloguj = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  /* ------------------ ZADANIA ------------------ */
  const dzialy = Array.from(new Set(zadania.map(z => z.dzial)));
  const zadaniaDoWyswietlenia = zadania.filter(z => z.dzial === selectedDzial);

  const toggleSolution = (id: number) => {
    setVisibleSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="container">
      <h1 className="title">Matura – kurs matematyki</h1>

      {/* ======= PASEK LOGOWANIA ======= */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        {user ? (
          <>
            <p>
              Witaj, <strong>{user.name}</strong>{" "}
              {userIsPremium ? "⭐ PREMIUM" : ""}
            </p>

            {!userIsPremium && (
              <Button className="button-primary" onClick={handleKupDostep}>
                🔓 Kup dostęp premium
              </Button>
            )}

            <Button
              className="button-primary"
              onClick={handleWyloguj}
              style={{ backgroundColor: "#ef4444", marginLeft: "8px" }}
            >
              🚪 Wyloguj
            </Button>
          </>
        ) : (
          <Button className="button-primary" onClick={handleKupDostep}>
            📝 Załóż konto i kup dostęp
          </Button>
        )}
      </div>

      {/* ======= DZIAŁY ======= */}
      <div className="dzialy">
        {dzialy.map(dz => (
          <Button
            key={dz}
            className={`button-dzial ${dz === selectedDzial ? "active" : ""}`}
            onClick={() => setSelectedDzial(dz)}
          >
            {dz}
          </Button>
        ))}
      </div>

      {/* ======= ZADANIA ======= */}
      {zadaniaDoWyswietlenia.map(zad => {
        const isVisible = visibleSolutions[zad.id] ?? false;
        const canSeeSolution = !zad.isPremium || userIsPremium;

        return (
          <div key={zad.id} className="card">
            <ZadanieABCD
              question={zad.question}
               image={zad.image}
              options={zad.options}
              correct={zad.correct}
            />

            {/* INFO PREMIUM */}
            {zad.isPremium && !userIsPremium && (
              <p className="premium-info">
                🔒 To zadanie ma rozwiązanie premium
              </p>
            )}

            {/* PRZYCISK */}
            {canSeeSolution && (
              <Button
                className="button-primary mt"
                onClick={() => toggleSolution(zad.id)}
              >
                {isVisible ? "🔽 Ukryj rozwiązanie" : "🔼 Pokaż rozwiązanie"}
              </Button>
            )}

            {/* ROZWIJANE ROZWIĄZANIE */}
            {isVisible && canSeeSolution && (
              <div className="solution">
                <p>{zad.solutionText}</p>

                <div className="video">
                  <iframe
                    src={zad.solutionVideo}
                    title="Rozwiązanie"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}
