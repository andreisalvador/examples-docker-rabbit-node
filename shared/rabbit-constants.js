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



const direct = {
    exchange: {
        name: 'direct-exchange',
        type: 'direct',
        routingKey: 'whatsapp',
        options: {
            durable: false,
        }
    }, queues: [{
        name: 'direct-queue-one',
        routingKey: 'sms',
        options: {
            durable: true
        },
        consumeOptions: {
            noAck: true
        }
    }, {
        name: 'direct-queue-two',
        routingKey: 'email',
        options: {
            durable: true
        }, consumeOptions: {
            noAck: true
        }
    }, {
        name: 'direct-queue-three',
        routingKey: 'whatsapp',
        options: {
            durable: true
        }, consumeOptions: {
            noAck: true
        }
    }]
}

module.exports = Object.freeze({
    FANOUT: fanout,
    DIRECT: direct
})