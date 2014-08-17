var gutil = require('gulp-util');
var execsyncs = require('execsyncs');
var debug = require('debug')('gulp-execsyncs');

module.exports = function(config) {
  var commands = config.commands || config.cmds || [];
  var command = config.command || config.cmd || (typeof config === 'string' && config);

  if (!Array.isArray(commands)) {
    throw new gutil.PluginError('gulp-execsyncs', 'commands should be Array');
  }
  commands.push(command);
  commands.forEach(function(cmd) {
    debug(cmd);
    if (cmd) {
      var result = execsyncs(cmd);

      if("function" === typeof config.callback){
        config.callback(result, cmd);
      } 
      
      debug(""+result);
    }
  });
};
