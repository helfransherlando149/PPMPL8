const express = require('express');
const app = express();

// Route untuk pengujian
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = app; // Pastikan app diekspor
