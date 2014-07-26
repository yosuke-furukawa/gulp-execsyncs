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
  gexecsyncs({
    cmds : [
      "ls > test/ls.txt",
      "cat test/ls.txt",
      "rm test/ls.txt"
    ]
  });
  // single task
  gexecsyncs({
    cmd : "ls > test/ls.txt",
  });
  // more simple task
  gexecsyncs("cat test/ls.txt");
  gexecsyncs("rm test/ls.txt");
});

gulp.task('default', ['shell']);
```
