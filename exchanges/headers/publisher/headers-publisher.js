const publisher = require('./../../../connections/publisher/PublisherBase.js')
const headersConfigurations = require('../../../shared/rabbit-constants.js')

publisher(`Publish message to queue with headers ${headersConfigurations.HEADERS.exchange.options.headers.format}`,
    headersConfigurations.HEADERS.queues, headersConfigurations.HEADERS.exchange)