const fs = require('fs');
const pdf = require('pdf-parse');

async function parsePdf() {
  try {
    const dataBuffer = fs.readFileSync('public/Reeturaj Kumar.pdf');
    const data = await pdf(dataBuffer);
    console.log(data.text);
  } catch (err) {
    console.error('Error parsing PDF:', err);
  }
}

parsePdf();
