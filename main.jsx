
import React, { useState } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

const fields = [
  { category: "🔥 Challenge", text: "Mach 5 Hampelmänner mit Bier in der Hand" },
  { category: "🔥 Challenge", text: "Sing einen Kinderhit auf Techno" },
  { category: "🍻 Alle, die...", text: "alle mit Sonnenbrand" },
  { category: "🔁 Aktion", text: "Zurück auf Start" },
  { category: "🥴 Trink", text: "Trinke 2 Schlücke" },
];

function App() {
  const [current, setCurrent] = useState(null);

  const draw = () => {
    const r = Math.floor(Math.random() * fields.length);
    setCurrent(fields[r]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🎉 Festival Trinkspiel 🎲</h1>
      {current && (
        <div className="card">
          <strong>{current.category}</strong>
          <p>{current.text}</p>
        </div>
      )}
      <button onClick={draw}>Feld ziehen</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
