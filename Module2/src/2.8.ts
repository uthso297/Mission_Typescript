{
    // promise

    const getTodo = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await response.json()

        console.log(data);
    }

    getTodo();

    type Something = { something: string }

    // const createPromise = (): Promise<string> => {
    //     return new Promise<string>((resolve, reject) => {
    //         const data: string = 'something'
    //         if (data) {
    //             resolve(data)
    //         }
    //         else {
    //             reject('failed to load data')
    //         }
    //     })
    // }

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'something' }
            if (data) {
                resolve(data)
            }
            else {
                reject('failed to load data')
            }
        })
    }


    // calling promise

    // const showData = async (): Promise<string> => {
    //     const data: string = await createPromise()
    //     console.log(data);
    //     return data;
    // }
    // showData();

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise()
        console.log(data);
        return data;
    }
    showData();
}

// tsnd --respawn Module2/src/2.8.ts