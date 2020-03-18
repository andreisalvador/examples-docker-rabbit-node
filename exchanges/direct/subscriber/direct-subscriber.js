const subscriber = require('./../../../connections/subcriber/SubscriberBase.js')
const fanoutConfigurations = require('../../../shared/rabbit-constants.js')

subscriber(fanoutConfigurations.DIRECT.queues)