const publisher = require('./../../../connections/publisher/PublisherBase.js')
const directConfigurations = require('../../../shared/rabbit-constants.js')

publisher(`DIRECT RK '${directConfigurations.DIRECT.exchange.routingKey}' MESSAGE`, directConfigurations.DIRECT.queues, directConfigurations.DIRECT.exchange)