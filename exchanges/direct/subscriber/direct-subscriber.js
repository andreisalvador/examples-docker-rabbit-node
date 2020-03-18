const subscriber = require('./../../../connections/subcriber/SubscriberBase.js')
const directConfigurations = require('../../../shared/rabbit-constants.js')

subscriber(directConfigurations.DIRECT.queues)