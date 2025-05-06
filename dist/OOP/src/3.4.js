"use strict";
{
    // instanceof guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`I am making sound`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log(`i am barking`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeow() {
            console.log(`i am meowing`);
        }
    }
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        // if (animal instanceof Dog) {
        //     animal.makeBark();
        // }
        // else if (animal instanceof Cat) {
        //     animal.makeMeow();
        // }
        // else {
        //     animal.makeSound();
        // }
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog('Kutta', 'Dog');
    const cat = new Cat('Kitty', 'Cat');
    getAnimal(dog);
}
// tsnd --respawn OOP/src/3.4.ts
