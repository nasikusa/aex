var aeToJSON = require('ae-to-json/after-effects');
var ae = require('after-effects');

ae.execute(aeToJSON)
.then(function(json) {
  // do something with the json outout
  console.log(json);
})
.catch(function(e) {
  throw e;
});