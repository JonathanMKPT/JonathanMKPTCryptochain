const express = require('express');
const Blockchain = require('./blockchain');

const app = express();

const blockchain = new blockchain();

app.get('/api/blocks', (req, res) => {
    req.json(blockchain.chain);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));