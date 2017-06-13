var Athlete = function() {
  this.hydration = 100;
  this.distance = 0;
}


Athlete.prototype.run = function() {
  if (this.hydration > 0) {
    this.hydration -= 10;
    this.distance += 10;
  }
}

Athlete.prototype.drink = function(water_bottle) {
// calling the drink function makes sure the volume in the water bottle goes down by the correct amount
    water_bottle.drink();
    this.hydration += 10;
}


module.exports = Athlete;
