
module.exports = function(RED) {
    "use strict";

    var request = require('request');
    var slackBotGlobal = {};
    var connecting = false;
    

    function subscribeByHash(node, msg) {
        msg.payload = "Subscribed"
        return node.send(msg)
    }

    

    /* SUBSCRIBE TO EVENTS */
    function subscribe(n) {
        this.contractHash = n.contractHash
        this.interface = RED.nodes.getNode(n.interface)
        var contractHash
        RED.nodes.createNode(this, n)
        var node = this
        this.on('input', function(msg) {
            subscribeByHash(node, msg)
        })
    }
    RED.nodes.registerType("Subscribe", subscribe)

    /* CONFIG */
    function IFace(n) {
        RED.nodes.createNode(this, n);
        this.name = n.name;
        this.interface = n.interface;
        this.rpc = n.rpc;
    }
    RED.nodes.registerType("Interface", IFace);

}

