var assert = require('assert');
var WaterBottle = require('../water_bottle.js');

// describe everything is being
describe('Water Bottle', function() {

  var bottle;

  beforeEach(function() {
    bottle = new WaterBottle();
  });


  it('should be empty at start', function() {
    // bring in bottle
    // var bottle = new WaterBottle();
    // strict equal ===
    // deepEqual 1 = [1, 2, 3] and 2 = [1, 2, 3]
    assert.strictEqual(0, bottle.volume);
  });

  it('should be 100 when filled', function() {
    bottle.fill();
    assert.strictEqual(100, bottle.volume);
  });

  it('should go down by 10 when drunk', function() {
    bottle.fill();
    bottle.drink();
    assert.strictEqual(90, bottle.volume);
  });

  it('should be able to empty', function() {
    bottle.fill();
    bottle.drink();
    bottle.empty();
    assert.strictEqual(0, bottle.volume);
  });

  it('should be able to go below 0', function() {
    bottle.fill();
      for(var i = 0; i < 12; i++) {
       bottle.drink();
    }

    // bottle.drink();
    // bottle.drink();
    // bottle.drink();
    // bottle.drink();
    // bottle.drink();
    // bottle.drink();
    // bottle.drink();
    // bottle.drink();
    // bottle.drink();
    // bottle.drink();
assert.strictEqual(0, bottle.volume);
  });

});
