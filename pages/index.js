import { useState, useEffect } from 'react';

export default function Home() {
  console.log('Hei');

  useEffect(() => {
    document.title = 'Martin Molvær';
  });

  return (
    <div className="sec">
      <div className="nav">
        <a href="https://github.com/martinmolvaer" target="_blank">
          Git
        </a>
        {/* <a href="">Link</a>
        <a href="">Link</a> */}
      </div>
      <div className="container">
        <div className="midmebaby">
          <h1>Hei</h1>
        </div>
      </div>
    </div>
  );
}
