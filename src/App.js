import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Clock</h1>
        <div className="clock-display">
          <h2 className="clock-time">
            {time.toLocaleTimeString()}
          </h2>
        </div>
      </header>
    </div>
  );
}

export default App;