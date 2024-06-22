import { useState, useEffect } from 'react';
import Logo from '../pages/components/logo.js';
export default function Home() {
  useEffect(() => {
    document.title = 'Martin Molvær';
  });

  const [bgColor, setBgColor] = useState('');
  const [navColor, setNavColor] = useState('ivorytext');
  const [originalBgColor, setOriginalBgColor] = useState('');
  const [originalNavColor, setOriginalNavColor] = useState('ivorytext');

  const changeColor = () => {
    if (bgColor === '') {
      setBgColor('ivorybg');
      setNavColor('textblue');
    } else {
      setBgColor(originalBgColor);
      setNavColor(originalNavColor);
    }
  };

  return (
    <div className={`bigman ${bgColor}`}>
      <div className={`nav ${navColor}`}>
        <a className="link" href="mailto:martin@molvaer.no">
          martin@molvaer.no
        </a>
        <a className="link" href="https://github.com/martinmolvaer">
          Github
        </a>
        <a className="link" href="http://pixel-rats.vercel.app">
          Pixel Rats
        </a>
        <a className="link" href="https://dicemice.vercel.app/">
          Catzee/Dicemice
        </a>
        {/* <a href="">Link</a>
        <a href="">Link</a> */}
      </div>
      <div className="sec">
        <div className="container ">
          <div className="wrapper">
            <div className="click" onClick={changeColor}>
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
