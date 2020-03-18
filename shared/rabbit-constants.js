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
        name: 'direct-queue-sms',
        routingKey: 'sms',
        options: {
            durable: true
        },
        consumeOptions: {
            noAck: true
        }
    }, {
        name: 'direct-queue-email',
        routingKey: 'email',
        options: {
            durable: true
        }, consumeOptions: {
            noAck: true
        }
    }, {
        name: 'direct-queue-whatsapp',
        routingKey: 'whatsapp',
        options: {
            durable: true
        }, consumeOptions: {
            noAck: true
        }
    }]
}

const headers = {
    exchange: {
        name: 'headers-exchange',
        type: 'headers',
        options: {
            durable: false,
            headers: {
                'format': 'xml',
                'x-match': 'all'
            }
        }
    }, queues: [{
        name: 'headers-queue-json',
        options: {
            durable: true,
            headers: {
                'format': 'json'                
            }
        },
        consumeOptions: {
            noAck: true
        }
    }, {
        name: 'headers-queue-txt',        
        options: {
            durable: true,
            headers: {
                'format': 'txt'                
            }
        }, consumeOptions: {
            noAck: true
        }
    }, {
        name: 'headers-queue-xml',        
        options: {
            durable: true,
            headers: {
                'format': 'xml'
            }
        }, consumeOptions: {
            noAck: true
        }
    }]
}


const topic = {
    exchange: {
        name: 'topic-exchange',
        type: 'topic',
        routingKey: 'cellphone.year.apple',
        options: {
            durable: false,
        }
    }, queues: [{
        name: 'topic-queue-year',
        routingKey: '*.year.*',
        options: {
            durable: true
        },
        consumeOptions: {
            noAck: true
        }
    }, {
        name: 'topic-queue-car',
        routingKey: '*.car',
        options: {
            durable: true
        }, consumeOptions: {
            noAck: true
        }
    }, {
        name: 'topic-queue-color',
        routingKey: 'color.model.#',
        options: {
            durable: true
        }, consumeOptions: {
            noAck: true
        }
    }]
}

module.exports = Object.freeze({
    FANOUT: fanout,
    DIRECT: direct,
    HEADERS: headers,
    TOPIC: topic
})