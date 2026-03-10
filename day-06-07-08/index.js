// console.log("Hiii")
// let a = 10
// a = 20
// let b: string = "hello"
// // Number
// let num: number = 42;
// // String
// let str: string = "TypeScript";
// // Boolean
// let bool: boolean = true;
// // Any
// let anything: any = "can be anything";
// // Unknown
// let unknown: unknown = 10;
// // Null
// let nothing: null = null;
// // Undefined
// let undef: undefined = undefined;
// // Array
// let arr: number[] = [1, 2, 3];
// let arr1: [string, boolean, number, number] = ["dbd", true, 2545, 4585]
// // Tuple
// let tuple: [string, number] = ["age", 25];
// // Enum
// enum Color { Red, Green, Blue }
// let color: Color = Color.Red;
// // Union
// let union: string | number = "or number";
// // Type aliases
// type ID = string | number;
// let id: ID = 123;
// // Interface
// interface User { name: string; age: number; }
// let user: User = { name: "John", age: 30 };
// // Object
// let obj: object = { key: "value" };
// // Void
// let empty: void = undefined;
// // Never
// let nothing2: never = undefined as never;
// console.log(num, str, bool, anything, unknown, nothing, undef, arr, tuple, color, union, id, user, obj, empty);
// let stud: {
//     name: string,
//     age: number
// } = {
//     name: "Naman Singh",
//     age: 21
// }
// function greet(name?: string, age: number = 24) {
//     console.log(` ${name} and ${age}`);
// }
// greet("Naman")
// let arr3: (string | number)[] = [234, "sdf", 2548, 9654, "String"]
// arr3.push(234)
// console.log(arr3)
// interface person {
//     name: string,
//     age: number,
//     id: number,
//     gender?: string
// }
// let obj: person = {
//     name: "Naman Singh",
//     age: 21,
//     id: 92,
//     gender: "male",
// }
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.id)
// console.log(obj.gender)
// interface car {
//     name: string,
//     brand: string,
//     color: string,
//     horsePower: number
// }
// let mycar: car = {
//     name: "Range Rover",
//     brand: "Land Rover",
//     color: "Black",
//     horsePower: 2000,
// }
// console.log(mycar.name)
// console.log(mycar.brand)
// console.log(mycar.color)
// console.log(mycar.horsePower)
// 23/02/2026
// class Car {
//     public brand?: string;
//     color: string = "blue";
//     display(): void {
//         console.log("display");
//     }
//     constructor(brand: string, color: string) {
//         this.brand = brand;
//         this.color = color;
//         this.display()
//         this.display = () => {
//             console.log("new display");
//         };
//         this.display()
//     }
//     start(): void {
//         console.log("This is my car");
//     }
// }
// let c = new Car("maruti", "red")
// console.log(c.display());
// console.log(c);
// c.start();
// class toyota {
//     name?: string;
//     constructor(name: string) {
//         this.name = name;
//     };
// }
// let car1 = new toyota("fortuner")
// console.log(car1.name)
// class animal {
//     eat() {
//         console.log("All animals eat")
//     }
// }
// class Cat extends animal {
//     sound() {
//         console.log("meow")
//     }
// }
// let cat = new Cat()
// cat.eat()
// cat.sound();
// class Person {
//     name: string = "Naman"
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class Student extends Person {
//     company: string = "Capgemini"
//     constructor(company: string, name: string) {
//         super(name)
//     }
//     display() {
//         console.log(this.name);
//         console.log(this.company);
//     }
// }
// let t = new Student("abc", "xyz")
// t.display();
// export function add(a: number, b: number): number {
//     return a + b
// }
// console.log(add(10, 20));
// console.log(add(40, 20));
// setTimeout(() => {
//     console.log("Task completed");
// }, 5000)
// setInterval(() => {
//     console.log("Task 2 completed");
// }, 1000)
// let a: number = setTimeout(() => {
//     console.log("done");
// }, 2000)
// console.log(typeof (a));
// let p1 = new Promise<string>((lol, reject) => {
//     let success = true;
//     if (success = true) {
//         lol("login successful")
//     }
//     else {
//         reject("login unsuccessful")
//     }
// })
// p1.then((ele) => {
//     console.log(ele);
// })
const promise = new Promise((resolve) => {
    resolve(5);
});
promise
    .then((num) => {
    console.log(num);
    return num * 2;
})
    .then((num) => {
    console.log(num);
    return num + 3;
})
    .then((num) => {
    console.log(num);
});
