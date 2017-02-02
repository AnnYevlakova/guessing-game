class GuessingGame {
    constructor() {
       this.middle = null;
       this.min = null;
       this.max = null;
    }

    setRange(min, max) {
        if(min == max) {
            return min;
        }
        if(max-min == 1){
            return max;
        }
        this.middle = Math.ceil((max+min)/2);
        this.min = min;
        this.max = max;
        return this.guess();
        
    }

    guess() {
        return this.middle;
        /*var x = confirm(this.middle);
        if(x == true) { 
            return true;
        } else { 
           return this.lower();
        }*/
    }

    lower() {
        this.setRange(this.min, this.middle);
    }

    greater() {
        this.setRange(this.middle, this.max);
    }
}
module.exports = GuessingGame;
