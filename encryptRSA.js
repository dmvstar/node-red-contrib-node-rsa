const nodeRSA = require('node-rsa');

module.exports = function(RED) {
    function encryptRSANode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var json = msg.payload;
            var keyText = msg.key;
            var key = new nodeRSA(keyText);
            var text = JSON.stringify(json);
            const encrypted = key.encryptPrivate(text, 'base64');
            msg.payload = encrypted;
            node.send(msg);
        });
    }
    RED.nodes.registerType("encryptRSA", encryptRSANode);
}
