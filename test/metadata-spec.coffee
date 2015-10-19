describe 'Plugin Metadata', ->
  it "should tell us which models it defines", ->
    modelNames = plugin.modelNames()
    modelNames.should.containEql('Concept','Diagram','Epic')

  it "should tell us model folder names", ->
    modelGroups = plugin.groupNames()
    modelGroups.should.containEql('concepts','diagrams','epics','projects','sitemaps')

