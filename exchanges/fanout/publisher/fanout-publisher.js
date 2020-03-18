const publisher = require('./../../../connections/publisher/PublisherBase.js')
const fanoutConstants = require('../shared/fanout-shared.js')

console.log(fanoutConstants)
publisher('FANOUT MESSAGE', fanoutConstants.queues, fanoutConstants.exchange)