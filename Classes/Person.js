class Person {
  firstName;
  lastName;
  age;
  email;

  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

const newPerson = new Person("Rosen", "Ignatov", 37, "rosen@email.com");
console.log(newPerson.toString());
