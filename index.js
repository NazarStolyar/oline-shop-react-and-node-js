require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000
app.use(express.json());


app.get('/api/test', (req, res) => {
    res.json({
        status: 'ok',
    })
})


async function start() {
    try {
        app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
    } catch (e) {
        console.log('server error', e.message);
        process.exit(1);
    }
}

start();
