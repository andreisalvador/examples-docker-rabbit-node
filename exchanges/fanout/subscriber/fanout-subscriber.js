const subscriber = require('./../../../connections/subcriber/SubscriberBase.js')
const fanoutConfigurations = require('../shared/fanout-shared.js')

subscriber(fanoutConfigurations.FANOUT.QUEUES)