import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>Click counter</h3>
      <MyButton count={count} onClick={handleCount} />
      <MyButton count={count} onClick={handleCount} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
