//inports data from the config.js file
const { GENESIS_DATA } = require("./config");

class Block{
     constructor({timestamp, lastHash, hash, data}){
         this.timestamp = timestamp;
         this.lastHash = lastHash;
         this.hash = hash;
         this.data = data;
    }
    //calls instance of genesis block from config.js
    static genesis() {
        return new this(GENESIS_DATA);
    }
    static mineBlock({ lastBlock, data }) {
        return new this({
            timestamp: Date.now(),
            lastHash: lastBlock.hash,
            data
        });
    }
  
}
module.exports = Block;
