const nodeRSA = require('node-rsa');
module.exports = function(RED) {
    function decryptRSANode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var keyText = msg.key;
            var key = new nodeRSA(keyText);
            var text = msg.payload;
            const decrypted = key.decryptPublic(text, 'utf8');
            msg.payload = decrypted;
            node.send(msg);
        });
    }
    RED.nodes.registerType("decryptRSA", decryptRSANode);
}
