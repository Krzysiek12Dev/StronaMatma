"use client";

import { useState, useEffect } from "react";
import ZadanieABCD from "../components/ZadanieABCD";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Header from "../components/Header";
import { zadania } from "../data/zadania";
import "../styles/buttons.css";
import "../styles/cards.css";
import "../styles/sidebar.css";
import { useAuth } from "@/components/AuthProvider";


interface User {
  name: string;
  isPremium: boolean;
}

export default function Page() {
  const [selectedDzial, setSelectedDzial] = useState("Algebra");
  const [selectedLevel, setSelectedLevel] = useState("Liceum");
  const [user, setUser] = useState<User | null>(null);
  const [visibleSolutions, setVisibleSolutions] = useState<Record<number, boolean>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // domyślnie otwarty na dużych ekranach

  /* ------------------ LOGOWANIE ------------------ */
  /* teraz ma być tak */

  
//   const { login } = useAuth();

// login({
//   email: "user@test.pl",
//   isPremium: true, // albo false
// });


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

  /* ------------------ FILTRY ------------------ */
  const dzialy = Array.from(new Set(zadania.map(z => z.dzial)));
  const levels = Array.from(new Set(zadania.map(z => z.level)));

  const filteredZadania = zadania.filter(
    z => z.dzial === selectedDzial && z.level === selectedLevel
  );

  const toggleSolution = (id: number) => {
    setVisibleSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* HEADER */}
      <Header onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />

      <main className="container" style={{ display: "flex", gap: "24px" }}>
       {/* HAMBURGER do otwierania sidebaru */}
{!isSidebarOpen && (
  <button
    className="hamburger"
    onClick={() => setIsSidebarOpen(true)}
  >
    ☰
  </button>
)}

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



        {/* GŁÓWNA TREŚĆ */}
        <div style={{ flex: 1 }}>
          <h1 className="title">Skuteczna matma</h1>

          {/* LOGOWANIE */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            {user ? (
              <>
                <p>
                  Witaj, <strong>{user.name}</strong> {userIsPremium ? "⭐ PREMIUM" : ""}
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
                  <p className="premium-info">🔒 To zadanie ma rozwiązanie premium</p>
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
        </div>
      </main>
    </>
  );
}
