import { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Mi primera app web</h1>

      <div className="card">
        <p>en est app web podemos interactuar con un clik de modo oscuro a modo claro.</p>
        
      </div>

      <button onClick={() => setDark(!dark)}>
        {dark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>
    </div>
  );
}