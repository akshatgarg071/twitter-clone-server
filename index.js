const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from Twitter Clone!')
})

app.listen(port, () => {
    console.log(`Twitter clone is listening on port ${port}`)
})