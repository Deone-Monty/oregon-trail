console.log("Hi Deone")
class Traveler {
    constructor (name) {
        this.name = name;
        this.food =1;
        this.isHealthy = true;
    }
    eat() {
        if (this.food > 0) {
            this.food -= 1;
            this.isHealthy = true;
        }else {
            this.isHealthy = false;
        }
       

    }
    hunt() {
        this.food = this.food + 2;
        // this.food += 2;
    }
}

let cramer = new Traveler("Cramer");
console.log(cramer);
cramer.eat()
console.log(cramer);
cramer.eat()
console.log(cramer);

class Wagon {
    constructor (capacity) {
        this.capacity = capacity;
        this.passengers = [];

    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if(this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)

        }
    }
    totalFood() {
        // variable to keep total
        let total = 0;

        // use loop to update the totalFood
        for (let i = 0;i < this.passengers.length ;i = i + 1) {
            console.log(this.passengers[i].food);
            total = total + this.passengers[i].food;

        }

        // return the total
        return total;
    }
    shouldQuarantine() {
        // variable number of sick people
        let ill = 0;

        // use a loop to update the number of sick people
        for(let i = 0; i < this.passengers.length; i = i + 1) {
            console.log(this.passengers[i].isHealthy);
            if(this.passengers[i].isHealthy) {

            }else {
                ill = ill + 1;
            }

        }

        // return true if the number of sick people is 1 or more 
        // return false if not
        if (ill >= 1) {
            return true
        }else {
            return false
        }

        
        
    }
}


let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)

console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)

console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)