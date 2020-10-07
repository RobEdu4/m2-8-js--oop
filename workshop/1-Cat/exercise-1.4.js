// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.species = `cat`;
    this.breed = breed;
    this.tiredness = 100;
    this.hunger = 100;
    this.loneliness = 100;
    this.happiness = 0;
  }
  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += 10;
  };
  eat = (kibbles) => {
    this.hunger -= kibbles / 5;
    this.happiness += 10;
  };
  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += 50;
  };
  wait = (minutes) => {
    this.tiredness += minutes / 5;
    this.hunger += minutes / 5;
    this.loneliness += minutes / 5;
    this.happiness -= minutes / 5;
  };
}

const griffs = new Cat(`Griffs`, `Maine Coon`);

console.log(griffs);

griffs.sleep(20);
griffs.eat(500);
griffs.play(33);

console.log(griffs);

griffs.wait(20);

console.log(griffs);
