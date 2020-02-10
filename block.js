class Block{
    constructor({timestamp, lastHash, hash, data}){
        this.timestamp,
        this.lastHash,
        this.hash,
        this.data
    }
}
const block1 = new Block({
    timestamp:'01/01/2020', 
    lastHash:'foo-lastHash',
    hash:'foo-hash', 
    data:'foo-data'

});
console.log('block1', block1);