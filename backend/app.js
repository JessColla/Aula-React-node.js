const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { vetorNumbers  } = require('./src/vetorNumbers');
const { emailGenerator } = require('./src/emailGenerator');
const { employees } = require('./src/employees');

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json());

app.get('/generate', (req, res) => {
    const existingEmails = [];
    const emails = employees.map(employee => {
        const email = emailGenerator(employee, existingEmails);
        existingEmails.push(email);
        return { employee, email };
    });

    const generatedNumbers = vetorNumbers ();
    const minNumber = Math.min(...generatedNumbers);
    const maxNumber = Math.max(...generatedNumbers);

    fs.writeFileSync('resultados.txt', `Menor número: ${minNumber}\nMaior número: ${maxNumber}`);

    res.json({ emails, generatedNumbers: generatedNumbers, minNumber: minNumber, maxNumber: maxNumber });
});