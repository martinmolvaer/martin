import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    document.title = 'Martin Molvær';
  });

  return (
    <div className="bigman">
      <div className="nav">
        <p className="whitetext">Martin Molvær</p>
        <a className="whitetext linknav" href="mailto:martin.molvaer@gmail.com">
          Kontakt
        </a>
      </div>
      <div className="sec">
        <div className="container ">
          <div className="wrapper">
            <a className="link" href="https://stromme.vercel.app">
              Abonnoment-kalkulator
            </a>
            <a className="link" href="https://to-duck.vercel.app">
              To duck
            </a>
            <a className="link" href="https://robot-rust.vercel.app/">
              Robot.exe
            </a>
            <a className="link" href="https://pilsometer.vercel.app/">
              Pilsometer
            </a>
            {/* <a className="link" href="https://tacofy.vercel.app/">
          Tacofy{' '}
        </a>
       */}
            <a className="link" href="mailto:martin.molvaer@gmail.com">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
