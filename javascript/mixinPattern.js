//Let’s say that for our application, we need to create multiple dogs. However, the basic dog that we create doesn’t have any properties but a name property.

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// a dog should be able to do more than just bark. It should be able to eat, sleep, and play. We can create a mixin for each of these behaviors.

const dogFunctionality = {
    eat() {
        console.log(`dog is eating`);
    },
    sleep() {
        console.log(`dog is sleeping`);
    },
    play() {
        console.log(`dog is playing`);
    }
}

// We can add the dogFunctionality mixin to the Dog prototype with the Object.assign method. This method lets us add properties to the target object: Dog.prototype in this case. Each new instance of Dog will have access to the the properties of dogFunctionality, as they’re added to the Dog’s prototype!

Object.assign(Dog.prototype, dogFunctionality);

const firstDog = new Dog('Max');

console.log(firstDog.eat(), firstDog.sleep(), firstDog.play());

// Let’s create a animalFunctionality mixin that adds the walk and sleep properties.

const animalFunctionality = {
    walk() {
        console.log(`animal is walking`);
    },
    sleep() {
        console.log(`animal is sleeping`);
    }
}

Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);