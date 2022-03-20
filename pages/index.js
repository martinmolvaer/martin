import { useState, useEffect } from "react";

export default function Home() {
  const [weird, setWeird] = useState("");

  console.log("hei");

  function getRandomInt(max) {
    const randomNumber = Math.floor(Math.random() * max);
    if (randomNumber === 0) {
      weirdFunc();
    }
  }

  useEffect(() => {
    document.title = "Molvaer.no";
  });

  const weirdFunc = () => {
    setWeird("rotate-180");
  };
  const removeText = () => {
    setWeird("");
  };

  return (
    <div className={`flex h-screen items-center justify-center `}>
      <div className="flex absolute w-full top-0">
        <div className="flex justify-center w-full">
          <div className="p-4">
            <a href="http://rull.molvaer.no">
              <p className="text-2xl hover:rotate-180 ease-in-out duration-300">
                🎲
              </p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold ">Martin Molvaer.</h1>
          <div className="flex justify-around mt-5">
            <a href="mailto:martin@molvaer.no">
              <div
                onMouseEnter={() => getRandomInt(10)}
                onMouseLeave={removeText}
                className={`p-3 bg-black ${weird}  text-white rounded-md hover:scale-105 ease-in-out duration-300`}
              >
                Say hi
              </div>
            </a>
            <a href="https://github.com/martinmolvaer">
              <div
                className={`p-3 bg-black text-white rounded-md hover:scale-105 ease-in-out duration-300`}
              >
                Github
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
