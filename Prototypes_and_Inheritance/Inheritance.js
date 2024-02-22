class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;       
    }

    sayHello() {
        console.log(`${this.name} says hello!`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);

        this.grade = grade;
    }
}

let person = new Student('Albert', 13, 'Seventh');
console.log(person);
person.sayHello();

console.log(person instanceof Person);
console.log(person.constructor);

