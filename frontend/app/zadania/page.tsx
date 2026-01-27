"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ZadanieABCD from "@/components/ZadanieABCD";
import Button from "@/components/Button";
import { zadania } from "@/data/zadania";
import { useAuth } from "@/components/AuthProvider";

import "@/styles/buttons.css";
import "@/styles/cards.css";
import "@/styles/sidebar.css";

export default function ZadaniaPage() {
  /* ---------- AUTH ---------- */
  const { user, login, logout } = useAuth();
  const userIsPremium = user?.isPremium ?? false;

  /* ---------- UI ---------- */
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [visibleSolutions, setVisibleSolutions] = useState<Record<number, boolean>>(
    {}
  );

  /* ---------- FILTRY ---------- */
  const [selectedDzial, setSelectedDzial] = useState("Algebra");
  const [selectedLevel, setSelectedLevel] = useState("Liceum");

  const dzialy = Array.from(
    new Set(zadania.map(z => z.dzial))
  );

  const levels = Array.from(
    new Set(zadania.map(z => z.level))
  );

  const filteredZadania = zadania.filter(
    z => z.dzial === selectedDzial && z.level === selectedLevel
  );

  /* ---------- HANDLERY ---------- */
  const toggleSolution = (id: number) => {
    setVisibleSolutions(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleKupPremium = () => {
    login({
      email: "user@test.pl",
      isPremium: true,
    });
  };

  return (
    <>
      {/* <Header onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} /> */}

      <main className="container" style={{ display: "flex", gap: "24px" }}>
        {/* HAMBURGER (mobile) */}
        {!isSidebarOpen && (
          <button className="hamburger" onClick={() => setIsSidebarOpen(true)}>
            ☰
          </button>
        )}

        {/* SIDEBAR */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          dzialy={dzialy}
          levels={levels}
          selectedDzial={selectedDzial}
          selectedLevel={selectedLevel}
          setSelectedDzial={setSelectedDzial}
          setSelectedLevel={setSelectedLevel}
        />

        {/* CONTENT */}
        <div style={{ flex: 1 }}>
          <h1 className="title">Zadania</h1>

          {/* PANEL KONTA */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            {user ? (
              <>
                <p>
                  Witaj, <strong>{user.email}</strong>{" "}
                  {userIsPremium && "⭐ PREMIUM"}
                </p>

                {!userIsPremium && (
                  <Button className="button-primary" onClick={handleKupPremium}>
                    🔓 Kup dostęp premium
                  </Button>
                )}

                <Button
                  className="button-primary"
                  onClick={logout}
                  style={{ backgroundColor: "#ef4444", marginLeft: 8 }}
                >
                  🚪 Wyloguj
                </Button>
              </>
            ) : (
              <Button className="button-primary" onClick={handleKupPremium}>
                📝 Załóż konto i kup dostęp
              </Button>
            )}
          </div>

          {/* ZADANIA */}
          {filteredZadania.map(zad => {
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

                {zad.isPremium && !userIsPremium && (
                  <p className="premium-info">
                    🔒 Rozwiązanie dostępne dla premium
                  </p>
                )}

                {canSeeSolution && (
                  <Button
                    className="button-primary mt"
                    onClick={() => toggleSolution(zad.id)}
                  >
                    {isVisible ? "🔽 Ukryj rozwiązanie" : "🔼 Pokaż rozwiązanie"}
                  </Button>
                )}

                {isVisible && canSeeSolution && (
                  <div className="solution">
                    <p>{zad.solutionText}</p>

                    {zad.solutionVideo && (
                      <div className="video">
                        <iframe
                          src={zad.solutionVideo}
                          title="Rozwiązanie wideo"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {!filteredZadania.length && (
            <p style={{ textAlign: "center" }}>
              Brak zadań dla wybranego działu.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
