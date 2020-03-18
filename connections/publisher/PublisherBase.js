const rabbitProcessor = require('./../RabbitConnector.js')

const publisherBase = (message, queues = [], exchange = {}) => {
    let sentWithSucessfull = false;
    rabbitProcessor((channel) => {
        if (exchange) {            
            channel.assertExchange(exchange.name, exchange.type, exchange.options)

            queues.forEach(queue => {
                channel.bindQueue(queue.name, exchange.name, queue.routingKey)
                channel.assertQueue(queue.name, queue.options)
            })

            sentWithSucessfull = channel.publish(exchange.name, exchange.routingKey, Buffer.from(message));
        } else {
            queues.forEach(queue => {
                channel.assertQueue(queue.name, queue.options)
                sentWithSucessfull = channel.sendToQueue(queue.name, Buffer.from(message))
            })
        }
    })
    if (sentWithSucessfull) console.log(`Message '${message}' sent with sucessfull.`, 'color: green')
    else console.error('Message didnt send');
}

module.exports = publisherBase