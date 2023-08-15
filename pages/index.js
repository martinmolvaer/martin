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
        <a href="https://github.com/martinmolvaer">martin@molvaer.no</a>
        <a href="https://github.com/martinmolvaer">Git</a>
        {/* <a href="">Link</a>
        <a href="">Link</a> */}
      </div>
      <div className="sec">
        <div className="container ">
          <div className="wrapper">
            <div className="click" onClick={changeColor}>
              <Logo />
            </div>
            {/* <h1 className="h1">Hei</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}
