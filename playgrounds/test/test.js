var test = require('tape'),
    estktap = require('estktap');

test('this is adobe extendscript tap test',function(t){
  estktap('this must be true','./test.jsx',true);
  t.end();
});