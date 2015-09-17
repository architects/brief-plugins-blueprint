global.brief = require('brief-node')
global.plugin = require('../src/index')
global.blueprint = brief.use(plugin).load("./example")
