interface SidebarProps {
  dzialy: string[];
  levels: string[];
  selectedDzial: string;
  selectedLevel: string;
  setSelectedDzial: (dzial: string) => void;
  setSelectedLevel: (level: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  dzialy,
  levels,
  selectedDzial,
  selectedLevel,
  setSelectedDzial,
  setSelectedLevel,
  isOpen,
  onClose
}: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <button className="button-close" onClick={onClose}>×</button>
      </div>

      <div className="sidebar-section">
        <h4>Działy</h4>
        {dzialy.map((dz) => (
          <button
            key={`dzial-${dz}`}
            className={dz === selectedDzial ? "active" : ""}
            onClick={() => setSelectedDzial(dz)}
          >
            {dz}
          </button>
        ))}
      </div>

      <div className="sidebar-section">
        <h4>Poziomy</h4>
        {levels.map((lv) => (
          <button
            key={`level-${lv}`}
            className={lv === selectedLevel ? "active" : ""}
            onClick={() => setSelectedLevel(lv)}
          >
            {lv}
          </button>
        ))}
      </div>
    </div>
  );
}
