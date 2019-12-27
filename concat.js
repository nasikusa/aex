var concat = require('concat-files');

concat([
  './src/UI/__GlobalExtendThis__.js',
  './dist/main.js',
], './test3.js', function(err) {
  if (err) throw err
  console.log('done');
});
