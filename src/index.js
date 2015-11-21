var path = require('path')
var glob = require('glob-all')
var manifest = require("../package.json")
var inflections = require('i')()

const command_files = glob.sync(path.join(__dirname,'commands') + '/**/*.js')
const model_files = glob.sync(path.join(__dirname,'models') + '/**/*.js')
const query_files = glob.sync(path.join(__dirname,'queries') + '/**/*.js')
const view_files = glob.sync(path.join(__dirname,'views') + '/**/*.js')

export default function plugin(brief, options={}){
	
  function modifier(briefcase, options={}){
    plugin.model_files.forEach(file => briefcase.loadModelDefinition(file))
    plugin.definitions.commands.forEach(file => briefcase.commands.fromPath(file))
    plugin.definitions.queries.forEach(file => briefcase.queries.fromPath(file))
    plugin.definitions.views.forEach(file => briefcase.views.fromPath(file))
  }

  Object.defineProperty(modifier, 'groupNames', {
    get: function(){
      return plugin.groupNames()
    }
  })

  Object.defineProperty(modifier, 'modelNames', {
    get: function(){
      return plugin.modelNames()
    }
  })

  return modifier
}

Object.defineProperty(plugin, 'definitions', {
  get: function(){
    return {
      models: model_files,
      commands: command_files,
      views: view_files,
      queries: query_files
    }
  }
})

plugin.model_files = model_files

plugin.modelNames = function(){
  return model_files.map(file => {
    let basename = path.basename(file).replace('.js','')
    return inflections.classify(basename)
  })
}

plugin.groupNames = function(){
  return plugin.modelNames().map(name => inflections.pluralize(name).toLowerCase())
}

plugin.plugin_name = manifest.name.replace(/brief-plugins-/,'')
plugin.version = manifest.version
plugin.description = manifest.description
