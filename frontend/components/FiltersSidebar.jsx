export default function FiltersSidebar() {
  const [exam, setExam] = useState(EXAMS.E8);
  const [level, setLevel] = useState(LEVELS.BASIC);
  const [years, setYears] = useState(["2024"]);
  const [sections, setSections] = useState([]);
  const [taskTypes, setTaskTypes] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  const [access, setAccess] = useState(["free"]);

  const toggleArrayValue = (value, array, setter) => {
    setter(
      array.includes(value)
        ? array.filter(v => v !== value)
        : [...array, value]
    );
  };

  return (
    <aside className="filters-sidebar">
      <h2>Filtry</h2>

      {/* EGZAMIN */}
      <Section title="🎓 Egzamin">
        <Radio
          label="Egzamin ósmoklasisty"
          checked={exam === EXAMS.E8}
          onChange={() => setExam(EXAMS.E8)}
        />
        <Radio
          label="Matura"
          checked={exam === EXAMS.MATURA}
          onChange={() => setExam(EXAMS.MATURA)}
        />
      </Section>

      {/* POZIOM – TYLKO MATURA */}
      {exam === EXAMS.MATURA && (
        <Section title="📊 Poziom">
          <Radio
            label="Podstawowy"
            checked={level === LEVELS.BASIC}
            onChange={() => setLevel(LEVELS.BASIC)}
          />
          <Radio
            label="Rozszerzony"
            checked={level === LEVELS.EXTENDED}
            onChange={() => setLevel(LEVELS.EXTENDED)}
          />
        </Section>
      )}

      {/* ROK */}
      <Section title="📅 Rok">
        {["2024", "2023", "2022"].map(year => (
          <Checkbox
            key={year}
            label={year}
            checked={years.includes(year)}
            onChange={() => toggleArrayValue(year, years, setYears)}
          />
        ))}
      </Section>

      {/* DZIAŁ */}
      <Section title="📐 Dział">
        {(exam === EXAMS.E8 ? E8_SECTIONS : MATURA_SECTIONS).map(section => (
          <Checkbox
            key={section}
            label={section}
            checked={sections.includes(section)}
            onChange={() => toggleArrayValue(section, sections, setSections)}
          />
        ))}
      </Section>

      {/* TYP ZADANIA */}
      <Section title="🧩 Typ zadania">
        {(exam === EXAMS.E8 ? E8_TASK_TYPES : MATURA_TASK_TYPES).map(type => (
          <Checkbox
            key={type}
            label={type}
            checked={taskTypes.includes(type)}
            onChange={() => toggleArrayValue(type, taskTypes, setTaskTypes)}
          />
        ))}
      </Section>

      {/* TRUDNOŚĆ */}
      <Section title="⚡ Trudność">
        {["łatwe", "średnie", "trudne"].map(lvl => (
          <Radio
            key={lvl}
            label={lvl}
            checked={difficulty === lvl}
            onChange={() => setDifficulty(lvl)}
          />
        ))}
      </Section>

      {/* DOSTĘP */}
      <Section title="🔒 Dostęp">
        <Checkbox
          label="Darmowe"
          checked={access.includes("free")}
          onChange={() => toggleArrayValue("free", access, setAccess)}
        />
        <Checkbox
          label="Premium"
          checked={access.includes("premium")}
          onChange={() => toggleArrayValue("premium", access, setAccess)}
        />
      </Section>
    </aside>
  );
}
