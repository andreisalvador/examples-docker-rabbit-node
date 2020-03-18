const exchange = {
    name: 'fanout-exchange',
    type: 'fanout',
    options: {
        durable: false,        
    }
}
const queues = [{
    name: 'fanout-queue-one',
    options: {
        durable: true
    }
}, {
    name: 'fanout-queue-two',
    options: {
        durable: true
    }
}]

module.exports.fanoutConstants = {
    exchange,
    queues
}