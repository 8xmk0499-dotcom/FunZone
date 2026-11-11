import { useState } from "react";
import { GAMES, LANGS, T, type Lang } from "./i18n";

export default function App() {
  const [screen, setScreen] = useState<"welcome" | "home">("welcome");
  const [lang, setLang] = useState<Lang>("mr");
  const [dark, setDark] = useState(true);
  const [notice, setNotice] = useState("");
  const t = T[lang];

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  // apply dark class on first load
  if (typeof document !== "undefined" && dark && !document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  }

  const LangPicker = (
    <div className="flex gap-2">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            lang === l.code
              ? "bg-pink-500 text-white"
              : "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors">
      {screen === "welcome" ? (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
          <div className="text-7xl floaty">🎮</div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 bg-clip-text text-transparent fadeup">
            FUNZONE
          </h1>
          <p className="text-lg opacity-80 fadeup">{t.tagline}</p>
          {LangPicker}
          <button
            onClick={() => setScreen("home")}
            className="mt-4 w-full max-w-xs py-4 rounded-2xl text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 shadow-lg active:scale-95 transition"
          >
            {t.play}
          </button>
          <button onClick={toggleTheme} className="text-3xl" aria-label="theme">
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto p-4 pb-10">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setScreen("welcome")}
              className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-700 font-semibold"
            >
              ← {t.back}
            </button>
            <h1 className="text-2xl font-extrabold">FUNZONE</h1>
            <button onClick={toggleTheme} className="text-2xl" aria-label="theme">
              {dark ? "☀️" : "🌙"}
            </button>
          </div>

          <div className="mb-5 flex justify-center">{LangPicker}</div>

          <h2 className="text-xl font-bold mb-3">{t.chooseGame}</h2>

          {notice && (
            <div className="mb-3 p-3 rounded-xl bg-yellow-200 text-yellow-900 font-semibold">
              {notice}
            </div>
          )}

          <div className="grid gap-4">
            {GAMES.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setNotice(`${g.name[lang]}: ${t.soon}`)}
                style={{ animationDelay: `${i * 100}ms` }}
                className={`fadeup text-left rounded-3xl p-5 text-white shadow-xl bg-gradient-to-br ${g.color} active:scale-95 transition`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{g.emoji}</div>
                  <div>
                    <div className="text-xl font-extrabold">{g.name[lang]}</div>
                    <div className="opacity-90">{g.desc[lang]}</div>
                    <div className="mt-1 text-sm font-semibold bg-black/25 inline-block px-3 py-1 rounded-full">
                      👥 {g.players} {t.players}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
