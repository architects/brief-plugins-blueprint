glob = require('glob-all')
path = require('path')
paths = glob.sync(path.join(__dirname, 'fixtures','*'))
_ = require('underscore')

if paths.length > 0
  describe 'Loading Fixtures', ->
    it "should successfully load any fixtures", ->
      loader = brief.use(plugin)
      for root in paths
        briefcase = loader.load(root)
        briefcase.epics.first().should.not.equal(undefined)
        types = briefcase.epics.map (e)-> e.document.data.type
        _(types).uniq().length.should.equal(1)
