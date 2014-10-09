gulp-execsyncs
=====================

gulp plugins for execSync.

## Install

```
npm install gulp-execsyncs -D
```


## Usage

### simple
```js
var gulp = require('gulp'),
  execsyncs = require('gulp-execsyncs');

gulp.task('shell', function() {
  // execute multiple sync like ls > test/ls.txt && cat test/ls.txt && rm test/ls.txt
  execsyncs({
    cmds : [
      "ls > test/ls.txt",
      "cat test/ls.txt",
      "rm test/ls.txt"
    ]
  });
  // single task
  execsyncs({
    cmd : "ls > test/ls.txt",
  });
  // more simple task
  execsyncs("cat test/ls.txt");
  execsyncs("rm test/ls.txt");
});

gulp.task('default', ['shell']);
```

### With callback
```js
var gulp        = require('gulp'),
    execsyncs   = require('gulp-execsyncs')

// Use callback to retrieve command return
gulp.task('shell-cb', function(){
  execsyncs({
    cmd       : 'ls',
    callback  : function(res){
      console.log(res);
    }
  });
});

// The second argument of the callback is the original command
gulp.task('shell-cb', function(){
  execsyncs({
    cmds      : [
      'ls',
      'cat file.txt'
    ],
    callback  : function(res, command){
      console.log(command, ' : ', res);
    }
  });
});
```
