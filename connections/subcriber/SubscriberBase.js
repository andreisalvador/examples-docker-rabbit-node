const rabbitProcessor = require('./../RabbitConnector.js')

const subscriberBase = (queues = []) => {
    rabbitProcessor((channel) => {
        if (queues) {
            queues.forEach(queue => {
                channel.assertQueue(queue.name, queue.options)
                channel.consume(queue.name, (msg) => {
                    console.log(`Consumed message from queue '${queue.name}'`)
                    console.log(`Message: ${msg.content.toString()}`)
                }, queue.consumeOptions)
            })
        } else
            console.error("Please inform queues to subscriber.")
    }, false)
}

module.exports = subscriberBase