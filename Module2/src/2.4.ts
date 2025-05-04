{

    // interface --> generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'Uthso',
        computer: {
            brand: 'Asus',
            model: 'X-255UR',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'KW66',
            display: 'OLED'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrace: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        capacity: string;
    }

    const richDeveloper1: Developer<AppleWatch, YamahaBike> = {
        name: 'Sihab',
        computer: {
            brand: 'HP',
            model: 'X-25UR',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'something',
            heartTrace: true,
            sleepTrack: true,
        },
        bike: {
            model: 'Yamaha',
            capacity: '30cc',
        }
    }

}