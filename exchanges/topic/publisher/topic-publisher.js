const publisher = require('./../../../connections/publisher/PublisherBase.js')
const topicConfigurations = require('../../../shared/rabbit-constants.js')

publisher(`TOPIC RK '${topicConfigurations.TOPIC.exchange.routingKey}' MESSAGE`, topicConfigurations.TOPIC.queues, topicConfigurations.TOPIC.exchange)