var blueprint = require('../src/index')

var load = function(mod, options){
  mod = mod || require('brief-node')
  options = options || {}
  mod.use(blueprint)
  return mod.load(__dirname, options)
}

module.exports = load
