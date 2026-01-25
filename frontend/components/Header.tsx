"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styles/header.css";

export default function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="header">
      <div className="header-inner">
        {/* LOGO */}
        <Link href="/" className="header-logo">
          <Image
            src="/logo-kolor.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
          <span className="header-title">Nauka matematyki</span>
        </Link>

        {/* NAWIGACJA */}
        <nav className="nav">
          <Link href="/zadania" className={isActive("/zadania") ? "active" : ""}>
            Zadania
          </Link>
          <Link href="/testy" className={isActive("/testy") ? "active" : ""}>
            Testy
          </Link>
          <Link href="/matury" className={isActive("/matury") ? "active" : ""}>
            Matury
          </Link>
          <Link href="/konto" className={isActive("/konto") ? "active" : ""}>
            Konto
          </Link>
        </nav>
      </div>
    </header>
  );
}
