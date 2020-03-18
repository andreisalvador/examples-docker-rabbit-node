const subscriber = require('./../../../connections/subcriber/SubscriberBase.js')
const headersConfigurations = require('../../../shared/rabbit-constants.js')

subscriber(headersConfigurations.HEADERS.queues)