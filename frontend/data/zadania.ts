export interface Zadanie {
  id: number;
  dzial: string;
  question: string;
  image?: string;          // opcjonalny obrazek
  options: string[];
  correct: number;
  showSolution: boolean;   // czy rozwiązanie może być pokazane
  solutionText: string;
  solutionVideo: string;   // link do YouTube w formacie embed
  isPremium: boolean;
}

export const zadania: Zadanie[] = [
  {
    id: 1,
    dzial: "Algebra",
    question: "Oblicz pole trójkąta o podstawie 4 cm i wysokości 3 cm",
    image: "/rysunki/12.png",
    options: ["10", "6", "15", "20"],
    correct: 1,
    showSolution: true,
    solutionText: "Pole = 1/2 * 4 * 3 = 6 cm²",
    solutionVideo: "https://www.youtube.com/watch?v=LtE7w6cnkkg",
    isPremium: false
  },
  {
    id: 2,
    dzial: "Algebra",
    question: "Rozwiąż równanie x² - 5x + 6 = 0",
    options: ["x=2 lub x=3", "x=1 lub x=6", "x=3", "x=2"],
    correct: 0,
    showSolution: true,
    solutionText: "Równanie kwadratowe: (x-2)(x-3)=0 → x=2 lub x=3",
    solutionVideo: "https://www.youtube.com/embed/XXX2",
    isPremium: true
  },
  {
    id: 3,
    dzial: "Geometria",
    question: "Jakiego koloru jest kwadrat?",
    image: "/rysunki/okrag.png",
    options: ["Czerwony", "Zielony", "Niebieski", "Żółty"],
    correct: 2,
    showSolution: false,
    solutionText: "Kwadrat na obrazku jest niebieski.",
    solutionVideo: "https://www.youtube.com/embed/XXX3",
    isPremium: false
  },
  {
    id: 4,
    dzial: "Funkcje",
    question: "Podaj wartość funkcji f(x)=2x+1 dla x=3",
    options: ["5", "6", "7", "8"],
    correct: 2,
    showSolution: true,
    solutionText: "f(3) = 2*3 + 1 = 7",
    solutionVideo: "https://www.youtube.com/embed/XXX4",
    isPremium: true
  }
];
