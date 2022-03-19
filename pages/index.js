import { useState, useEffect } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [weird, setWeird] = useState("");

  console.log("hei");

  const getDark = () => {
    setDarkMode("bg-black text-white");
    setShowIcon(true);
  };
  const setLight = () => {
    setDarkMode("");
    setShowIcon(false);
  };

  function getRandomInt(max) {
    const randomNumber = Math.floor(Math.random() * max);

    if (randomNumber === 0) {
      weirdFunc();
    }
  }

  useEffect(() => {
    getRandomInt(10);
  }, []);

  const weirdFunc = () => {
    setWeird("rotate-180");
  };
  const removeText = () => {
    setWeird("");
  };

  return (
    <div className={`flex h-screen items-center justify-center ${darkMode}`}>
      <div className="flex absolute w-full top-0">
        <div className="flex justify-center w-full">
          <div className="p-4">
            <a href="http://rull.molvaer.no">
              <p className="text-2xl hover:rotate-180 ease-in-out duration-300">
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
            <div
              onMouseEnter={() => getRandomInt(10)}
              onMouseLeave={removeText}
              className={`p-3 text-white ${weird}  bg-black rounded-md hover:scale-105 ease-in-out duration-300`}
            >
              Say hi
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
