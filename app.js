const express = require('express');
const config = require('config');
const path = require('path');
const app = express();

const PORT = 1111;

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'lemonade', 'dist')));

    app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'lemonade', 'dist', 'index.html'))
    });
}

app.listen(PORT, () => console.log('some request'));