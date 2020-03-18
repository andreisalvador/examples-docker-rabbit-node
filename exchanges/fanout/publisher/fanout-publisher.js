const publisher = require('./../../../connections/publisher/PublisherBase.js')
const fanoutConfigurations = require('../shared/fanout-shared.js')

publisher('FANOUT MESSAGE', fanoutConfigurations.FANOUT.QUEUES, fanoutConfigurations.FANOUT.EXCHANGE)