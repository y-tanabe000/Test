module.exports = function(RED) {
    
    function readcsv(config) {
        
        RED.nodes.createNode(this,config);
        var node = this;
        const fs = require('fs');
        const csv = require('csv');

        fs.createReadStream(__dirname + 'test.csv')
        .pipe(process.stdout);
    }
    
    RED.nodes.registerType("readcsv",readcsv);
}
