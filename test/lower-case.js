module.exports = function(RED) {
    　//関数定義
        function LowerCaseNode(config) {
            //全てのノードで共有する機能を初期化
            RED.nodes.createNode(this,config);
            var node = this;
            node.on('input', function(msg) {
                msg.payload = msg.payload.toLowerCase();
                node.send(msg);
            });
        }
    　//ノード名を指定し、LowerCaseNodeノードをランタイムへ登録
        RED.nodes.registerType("lower-case",LowerCaseNode);
    }
    