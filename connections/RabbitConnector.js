const amqp = require('amqplib/callback_api')
const rabbitUrl = 'amqp://localhost:5671'

const rabbitProcessor = (rabbitCommand, isSubscriber = false) => {
    amqp.connect(rabbitUrl, (err, connection) => {
        if (err) throw err;
        connection.createChannel((err, channel) => {
            if (err) throw err;
            rabbitCommand(channel)
        })
        if (!isSubscriber)
            setTimeout(() => {
                connection.close();
                process.exit(0);
            }, 500);
    })
}

module.exports = rabbitProcessor;