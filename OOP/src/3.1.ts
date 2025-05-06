{
    // oop --> class & object

    class Animal {
        //   public name: string;
        //   public species: string;
        //   public sound: string;

        constructor(
            public name: string,
            public species: string,
            public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal('German Shepherd', 'Dogo', 'Ghew');
    dog.makeSound();
}

// tsnd --respawn OOP/src/3.1.ts