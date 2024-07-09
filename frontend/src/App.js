import React, { useState } from "react";
import "./App.css";

function App() {
  const [emails, setEmails] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [minNumber, setMinNumber] = useState(null);
  const [maxNumber, setMaxNumber] = useState(null);

  const handleGenerateEmails = async () => {
    try {
      const response = await fetch("http://localhost:3001/generate");
      const data = await response.json();

      if (data) {
        setEmails(data.emails || []);
        setNumbers(data.generatedNumbers || []);
        setMinNumber(data.minNumber || null);
        setMaxNumber(data.maxNumber || null);
      }
    } catch (error) {
      console.error("Erro ao acessar a rota", error);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-generate">
          <h1>Gerador de e-mails e números automático</h1>
          <button onClick={handleGenerateEmails}>Gerar</button>
        </div>
        <div className="emails-numbers">
          <div>
            <h2>E-mails:</h2>
            <ul>
              {emails.map((item, index) => (
                <li key={index}>{item.email}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Lista de números:</h2>
            <ul>
              {numbers.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
          </div>
          <div>
            {minNumber && maxNumber && (
              <div>
                <h2> Menor ou maior:</h2>
                <p>Menor número: {minNumber}</p>
                <p>Maior número: {maxNumber}</p>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
