const subscriber = require('./../../../connections/subcriber/SubscriberBase.js')
const topicConfigurations = require('../../../shared/rabbit-constants.js')

subscriber(topicConfigurations.TOPIC.queues)