"use client";

import Header from "@/components/Header";
import Button from "@/components/Button";
import { useAuth } from "@/components/AuthProvider";

import "@/styles/buttons.css";
import "@/styles/cards.css";

export default function KontoPage() {
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    // 🔹 tymczasowe logowanie (mock)
    login({
      email: "user@test.pl",
      isPremium: false,
    });
  };

  const handleUpgrade = () => {
    if (!user) return;

    login({
      ...user,
      isPremium: true,
    });
  };

  return (
    <>
      {/* <Header onToggleSidebar={() => {}} /> */}

      <main className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
        <h1 className="title">Twoje konto</h1>

        {!user ? (
          <div className="card" style={{ textAlign: "center" }}>
            <p>Nie jesteś zalogowany</p>

            <Button className="button-primary" onClick={handleLogin}>
              🔐 Zaloguj się / Załóż konto
            </Button>

            <p style={{ marginTop: 12, fontSize: 14, opacity: 0.7 }}>
              (na razie logowanie testowe)
            </p>
          </div>
        ) : (
          <div className="card">
            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {user.isPremium ? "⭐ PREMIUM" : "🔓 Darmowy"}
            </p>

            {!user.isPremium && (
              <Button
                className="button-primary"
                onClick={handleUpgrade}
                style={{ marginTop: 12 }}
              >
                🚀 Przejdź na Premium
              </Button>
            )}

            {user.isPremium && (
              <p style={{ marginTop: 12, color: "#16a34a" }}>
                Masz pełny dostęp do rozwiązań i testów 🎉
              </p>
            )}

            <Button
              className="button-primary"
              onClick={logout}
              style={{
                backgroundColor: "#ef4444",
                marginTop: 16,
              }}
            >
              🚪 Wyloguj się
            </Button>
          </div>
        )}
      </main>
    </>
  );
}
