var assert = require('power-assert');
var gexecsyncs = require('..');
var fs = require('fs');
var path = require('path');

describe('test execsyncs', function(){
  it('should call ls', function() {
    gexecsyncs("ls > test/ls.txt");
    var ls = "" + fs.readFileSync(path.join(__dirname , "ls.txt"));

    assert(ls.indexOf("index.js") >= 0);
    gexecsyncs({
      cmds : [
        "rm test/ls.txt",
        "curl google.com > test/google.txt",
      ]
    });
    var google = "" + fs.readFileSync(path.join(__dirname , "google.txt"));
    assert(google.indexOf("google") >= 0);

    gexecsyncs({
      cmd : "rm test/google.txt"
    });

    var exists = fs.existsSync(path.join(__dirname, "google.txt"));
    assert(exists === false);
  });
});
