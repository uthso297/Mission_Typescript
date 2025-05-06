"use strict";
{
    // statics
    class Counter {
        static increment() {
            return (Counter.count += 1);
        }
        static decrement() {
            return (Counter.count -= 1);
        }
    }
    Counter.count = 0;
    // const obj1 = new Counter();
    // console.log(obj1);
    // console.log(obj1.count);
    // console.log(obj1.increment());
    // console.log(obj1.count);
    // obj1.decrement();
    // console.log(obj1.count);
    // const obj2 = new Counter();
    // console.log(obj2.increment());
    Counter.increment();
    console.log(Counter.count);
    Counter.decrement();
    console.log(Counter.count);
}
