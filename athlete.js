var Athlete = function() {
  this.hydration = 100;
  this.distance = 0;
}

// Fish.prototype.swim = function() {
//   console.log("splash");
// }

Athlete.prototype.run = function() {
  if (this.hydration > 0) {
    this.hydration -= 10;
    this.distance += 10;
  }
}


module.exports = Athlete;
