'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = plugin;
var path = require('path');
var glob = require('glob-all');
var manifest = require("../package.json");
var model_files = glob.sync(path.join(__dirname, 'models') + '/**/*.js');

function plugin(brief) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return function modifier(briefcase) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    plugin.model_files.forEach(function (file) {
      return briefcase.loadModelDefinition(file);
    });
  };
}

plugin.model_files = model_files;

plugin.plugin_name = manifest.name.replace(/brief-plugins-/, '');
plugin.version = manifest.version;
plugin.description = manifest.description;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztxQkFLd0IsTUFBTTtBQUw5QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQzlCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUE7O0FBRTFELFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBYTtNQUFYLE9BQU8seURBQUMsRUFBRTs7QUFDOUMsU0FBTyxTQUFTLFFBQVEsQ0FBQyxTQUFTLEVBQWE7UUFBWCxPQUFPLHlEQUFDLEVBQUU7O0FBQzVDLFVBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTthQUFJLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7S0FBQSxDQUFDLENBQUE7R0FDeEUsQ0FBQTtDQUNGOztBQUVELE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBOztBQUVoQyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQy9ELE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQTtBQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxudmFyIGdsb2IgPSByZXF1aXJlKCdnbG9iLWFsbCcpXG52YXIgbWFuaWZlc3QgPSByZXF1aXJlKFwiLi4vcGFja2FnZS5qc29uXCIpXG5jb25zdCBtb2RlbF9maWxlcyA9IGdsb2Iuc3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCdtb2RlbHMnKSArICcvKiovKi5qcycpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsdWdpbihicmllZiwgb3B0aW9ucz17fSl7XG4gIHJldHVybiBmdW5jdGlvbiBtb2RpZmllcihicmllZmNhc2UsIG9wdGlvbnM9e30pe1xuICAgIHBsdWdpbi5tb2RlbF9maWxlcy5mb3JFYWNoKGZpbGUgPT4gYnJpZWZjYXNlLmxvYWRNb2RlbERlZmluaXRpb24oZmlsZSkpXG4gIH1cbn1cblxucGx1Z2luLm1vZGVsX2ZpbGVzID0gbW9kZWxfZmlsZXNcblxucGx1Z2luLnBsdWdpbl9uYW1lID0gbWFuaWZlc3QubmFtZS5yZXBsYWNlKC9icmllZi1wbHVnaW5zLS8sJycpXG5wbHVnaW4udmVyc2lvbiA9IG1hbmlmZXN0LnZlcnNpb25cbnBsdWdpbi5kZXNjcmlwdGlvbiA9IG1hbmlmZXN0LmRlc2NyaXB0aW9uXG4iXX0=