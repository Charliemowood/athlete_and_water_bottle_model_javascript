// module.exports WaterBottle can be done

var WaterBottle = function() {
  this.volume = 0;
  this.fill = function() {
    this.volume = 100;
  }
  this.drink = function() {
    if (this.volume > 0) {
      this.volume -= 10;
    }
  }
  this.empty = function() {
    this.volume = 0;
  }
}

// for our require to work in another file
module.exports = WaterBottle;
