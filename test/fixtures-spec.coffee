glob = require('glob-all')
path = require('path')
paths = glob.sync(path.join(__dirname, 'fixtures','*'))

describe 'Loading Fixtures', ->
  it "should successfully load any fixtures", ->
    loader = brief.use(plugin)
    for root in paths
      briefcase = loader.load(root)
      briefcase.epics.first().should.not.equal(undefined)
