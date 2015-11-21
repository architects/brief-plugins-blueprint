describe 'Plugin Metadata', ->
  it "should tell us which models it defines", ->
    modelNames = plugin.modelNames()
    modelNames.should.containEql('Concept','Diagram','Epic')

  it "should tell us about the different views it provides", ->
    plugin.definitions.views.length.should.equal(0)

  it "should tell us about the different queries it provides", ->
    plugin.definitions.queries.length.should.not.equal(0)

  it "should tell us about the different commands it provides", ->
    plugin.definitions.commands.length.should.not.equal(0)

  it "should tell us model folder names", ->
    modelGroups = plugin.groupNames()
    modelGroups.should.containEql('concepts','diagrams','epics','projects','sitemaps')

