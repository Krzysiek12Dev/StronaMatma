export interface Zadanie {
  id: number;
  dzial: string;
  level: string;
  egzamin: string;
  rok: number;
  miesiac: string;
  question: string;
  image?: string;
  options: string[];
  correct: number;
  showSolution: boolean;
  solutionText: string;
  solutionVideo: string;
  isPremium: boolean;
}
export const zadania = [
  {
    id: 1,
    dzial: "Algebra",
    level: "Liceum",
    egzamin: "Matura",
    rok: 2024,
    miesiac: "grudzien",
    question: "Oblicz pole trójkąta o podstawie 4 cm i wysokości 3 cm",
     image: "/rysunki/okrag.png",
    options: ["10", "6", "15", "20"],
    correct: 1,
    showSolution: true,
    solutionText: "Pole = 1/2 * 4 * 3 = 6 cm²",
    solutionVideo: "https://www.youtube.com/embed/LtE7w6cnkkg",
    isPremium: true
  },
  {
  id: 1324,

  egzaminSlug: "matura-podstawowa",
  egzaminName: "Matura – poziom podstawowy",

  dzialSlug: "algebra",
  dzialName: "Algebra",

  level: "Liceum",
  rok: 2024,
  miesiac: "grudzien",

  question: "Oblicz pole trójkąta o podstawie 4 cm i wysokości 3 cm",
  image: "/rysunki/okrag.png",
  options: ["10", "6", "15", "20"],
  correct: 1,

  showSolution: true,
  solutionText: "Pole = 1/2 * 4 * 3 = 6 cm²",
  solutionVideo: "https://www.youtube.com/embed/LtE7w6cnkkg",
  isPremium: false
},
  {
    id: 2,
    dzial: "algebra",
    level: "Liceum",
    egzamin: "Matura",
    rok: 2023,
    miesiac: "czerwiec",
    question: "Rozwiąż równanie x² - 4 = 0",
    options: ["x=2", "x=-2", "x=2 lub x=-2", "Brak rozwiązań"],
    correct: 2,
    showSolution: true,
    solutionText: "x² - 4 = 0 → x² = 4 → x = ±2",
    solutionVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isPremium: true
  },
  {
    id: 3,
    dzial: "Geometria",
    level: "Liceum",
    egzamin: "Matura",
    rok: 2024,
    miesiac: "czerwiec",
    question: "Oblicz obwód kwadratu o boku 5 cm",
    options: ["10", "15", "20", "25"],
    correct: 2,
    showSolution: true,
    solutionText: "Obwód = 4 * 5 = 20 cm",
    solutionVideo: "https://www.youtube.com/embed/LtE7w6cnkkg",
    isPremium: false
  },
  {
    id: 4,
    dzial: "Algebra",
    level: "Szkoła podstawowa",
    egzamin: "Egzamin 8-klasisty",
    rok: 2022,
    miesiac: "maj",
    question: "Rozwiąż równanie 2x + 3 = 7",
    options: ["x=1", "x=2", "x=3", "x=4"],
    correct: 1,
    showSolution: true,
    solutionText: "2x + 3 = 7 → 2x = 4 → x = 2",
    solutionVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isPremium: false
  },
  {
    id: 5,
    dzial: "Geometria",
    level: "Szkoła podstawowa",
    egzamin: "Egzamin 8-klasisty",
    rok: 2023,
    miesiac: "czerwiec",
    question: "Pole prostokąta o bokach 4 cm i 5 cm",
    options: ["9", "10", "20", "25"],
    correct: 2,
    showSolution: true,
    solutionText: "Pole = 4 * 5 = 20 cm²",
    solutionVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isPremium: false
  },
  {
    id: 6,
    dzial: "Algebra",
    level: "Liceum",
    egzamin: "Matura",
    rok: 2022,
    miesiac: "grudzien",
    question: "Oblicz pierwiastek z 49",
    options: ["6", "7", "8", "9"],
    correct: 1,
    showSolution: true,
    solutionText: "√49 = 7",
    solutionVideo: "https://www.youtube.com/embed/LtE7w6cnkkg",
    isPremium: false
  },
  {
    id: 7,
    dzial: "Statystyka",
    level: "Liceum",
    egzamin: "Matura",
    rok: 2023,
    miesiac: "czerwiec",
    question: "Średnia z liczb: 2, 4, 6, 8",
    options: ["4", "5", "6", "7"],
    correct: 1,
    showSolution: true,
    solutionText: "Średnia = (2+4+6+8)/4 = 5",
    solutionVideo: "https://www.youtube.com/embed/LtE7w6cnkkg",
    isPremium: false
  },
  {
    id: 8,
    dzial: "Algebra",
    level: "Szkoła podstawowa",
    egzamin: "Egzamin 8-klasisty",
    rok: 2024,
    miesiac: "maj",
    question: "Oblicz wartość wyrażenia: 5 + 3 * 2",
    options: ["11", "16", "10", "12"],
    correct: 0,
    showSolution: true,
    solutionText: "5 + 3 * 2 = 5 + 6 = 11",
    solutionVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isPremium: false
  }
];

