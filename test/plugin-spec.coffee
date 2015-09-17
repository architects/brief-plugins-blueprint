describe "The Blueprint Plugin", ->
  it "should load the plugin", ->
    names = brief.plugins.map (p)-> p.plugin_name
    names.should.containEql('blueprint')

  it "should load the models we want", ->
    definitions = blueprint.getModelDefinitions()
    names = definitions.map (def)-> def.name

    names.should.containEql('Project','Sitemap','Persona','Concept','Epic','Feature','Diagram')
