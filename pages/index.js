import { useState, useEffect } from 'react';

export default function Home() {
  console.log('Hei');

  useEffect(() => {
    document.title = 'Molvaer';
  });

  return (
    <div className="midmebaby">
      <p>Hei</p>
      <a href="https://github.com/martinmolvaer">git</a>
    </div>
  );
}
