const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`\n[!] SPY-OSINT NEXUS: DEPLOYED`);
    console.log(`[!] LOCAL  : http://localhost:${PORT}`);
    console.log(`[!] STATUS : ACTIVE & AGGRESSIVE\n`);
});
