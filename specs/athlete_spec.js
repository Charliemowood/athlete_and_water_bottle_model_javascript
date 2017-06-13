var assert = require('assert');
// This must be called correctly
var Athlete = require('../athlete.js');
var WaterBottle = require('../water_bottle.js')

describe('Athlete', function() {

  var athlete;
  var water_bottle;

  beforeEach(function() {
    athlete = new Athlete();
    water_bottle = new WaterBottle;
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
  });

  it('athlete does not move at 0 hydration', function() {
    for(var i = 0; i < 11; i++) {
     athlete.run();
    }
    assert.strictEqual(100, athlete.distance);
  });

  it('athlete can get water and increase hydration', function() {
    athlete.drink(water_bottle);
    assert.strictEqual(110, athlete.hydration);
  });

});
