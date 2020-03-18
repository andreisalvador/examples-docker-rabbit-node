const fanout = {
    exchange: {

        name: 'fanout-exchange',
        type: 'fanout',
        options: {
            durable: false,
        }
    }, queues: [{
        name: 'fanout-queue-one',
        options: {
            durable: true
        },
        consumeOptions: {
            noAck: true
        }
    }, {
        name: 'fanout-queue-two',
        options: {
            durable: true
        }, consumeOptions: {
            noAck: true
        }
    }]
}

module.exports = Object.freeze({
    FANOUT: fanout
})