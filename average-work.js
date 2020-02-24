const Blockchain = require('./blockchain');

const blockchain = new Blockchain();

blockchain.addBlock({data: 'inital'});

let prevTimestamp, nextTimestamp, nextBlock, timeDiff,average;

const times = [];