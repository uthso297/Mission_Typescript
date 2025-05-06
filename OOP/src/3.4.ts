{
    // instanceof guard

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log(`I am making sound`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log(`i am barking`);
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMeow() {
            console.log(`i am meowing`);
        }
    }

    const isDog = (animal: Animal) : animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal) : animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
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
    }

    const dog = new Dog('Kutta', 'Dog');
    const cat = new Cat('Kitty', 'Cat');

    getAnimal(dog);
}

// tsnd --respawn OOP/src/3.4.ts