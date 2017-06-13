var assert = require('assert');
// This must be called correctly
var Athlete = require('../athlete.js');

describe('Athlete', function() {

  var athlete;

  beforeEach(function() {
    athlete = new Athlete();
  });

  it('athlete should have hydration attribute that start at 100', function() {
    assert.strictEqual(100, athlete.hydration);
  });

  it('athlete should have distance travelled', function() {
    assert.strictEqual(0, athlete.distance);
  });

  it('athlete should be able to run decrease', function() {
    athlete.run();
    assert.strictEqual(90, athlete.hydration);
    assert.strictEqual(10, athlete.distance);
  })

  it('athlete does not move at 0 hydration', function() {
    for(var i = 0; i < 11; i++) {
     athlete.run();
    }
    assert.strictEqual(100, athlete.distance);
  })

});
