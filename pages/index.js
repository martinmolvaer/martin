import { useState, useEffect } from 'react';

export default function Home() {
  const [weird, setWeird] = useState('');

  console.log('heisann');

  useEffect(() => {
    document.title = 'Molvaer.no';
  });

  return (
    <div>
      <div className="h-full align-middle items-center w-full ">
        <div class="box"></div>
      </div>
    </div>
  );
}
