var path = require('path')
var glob = require('glob-all')
var manifest = require("../package.json")
const model_files = glob.sync(path.join(__dirname,'models') + '/**/*.js')

export default function plugin(brief, options={}){
  return function modifier(briefcase, options={}){
    plugin.model_files.forEach(file => briefcase.loadModelDefinition(file))
  }
}

plugin.model_files = model_files

plugin.plugin_name = manifest.name.replace(/brief-plugins-/,'')
plugin.version = manifest.version
plugin.description = manifest.description
