import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState("");
  const [showIcon, setShowIcon] = useState(false);

  const getDark = () => {
    setDarkMode("bg-black text-white");
    setShowIcon(true);
  };
  const setLight = () => {
    setDarkMode("");
    setShowIcon(false);
  };

  return (
    <div className={`flex h-screen items-center justify-center ${darkMode}`}>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold ">Martin M.</h1>
          <a href="mailto:martin@molvaer.no">
            <span className="items-center">martin.molvaer.no</span>
          </a>
          <div className="flex justify-center">
            {showIcon ? (
              <p className="cursor-pointer" onClick={setLight}>
                ☀️
              </p>
            ) : (
              <p className="cursor-pointer" onClick={getDark}>
                🌙
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
