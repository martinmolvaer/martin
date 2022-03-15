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
      <div className="flex absolute w-full top-0">
        <div className="flex justify-center w-full">
          <div className="p-4">
            <a href="http://rull.molvaer.no">
              <p className="text-2xl hover:scale-125 ease-in-out duration-300">
                🎲
              </p>
            </a>
          </div>
          {showIcon ? (
            <p
              className="p-4 cursor-pointer text-2xl hover:scale-125 ease-in-out duration-300"
              onClick={setLight}
            >
              ☀️
            </p>
          ) : (
            <p
              className=" p-4 cursor-pointer text-2xl hover:scale-125 ease-in-out duration-300"
              onClick={getDark}
            >
              🌙
            </p>
          )}
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold ">Martin M.</h1>
          <a href="mailto:martin@molvaer.no">
            <span className="items-center">martin.molvaer.no</span>
          </a>
        </div>
      </div>
    </div>
  );
}
