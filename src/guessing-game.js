class GuessingGame {
    constructor() {
    this.value = null;
      this.min = null;
      this.max = null;}

    setRange(min, max) {
      this.max = max;
      this.min = min;
    }

    guess() {
      this.value = Math.round((this.max-this.min)/2)+this.min;
      return this.value
    }

    lower() {
      this.max = this.value
    }

    greater() {
      this.min = this.value
    }
}

module.exports = GuessingGame;
