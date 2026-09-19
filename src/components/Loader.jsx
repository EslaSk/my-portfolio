import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      setCount(prev => {
        const next = prev + Math.floor(Math.random() * 12) + 4;
        if (next >= 100) {
          clearInterval(counter);
          return 100;
        }
        return next;
      });
    }, 70);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    if (count === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 1600);
      return () => clearTimeout(timeout);
    }
  }, [count, onComplete]);

  return (
    <div id="loader">
      <div className="loader-name">ESLA KAGBU</div>
      <div className="loader-bar-wrap"><div className="loader-bar" style={{ width: `${count}%` }}></div></div>
      <div className="loader-pct" id="loader-pct">{count}%</div>
    </div>
  );
};

export default Loader;
