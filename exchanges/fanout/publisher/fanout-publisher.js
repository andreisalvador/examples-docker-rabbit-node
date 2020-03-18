const publisher = require('./../../../connections/publisher/PublisherBase.js')
const fanoutConfigurations = require('../../../shared/rabbit-constants.js')

publisher('FANOUT MESSAGE', fanoutConfigurations.FANOUT.queues, fanoutConfigurations.FANOUT.exchange)