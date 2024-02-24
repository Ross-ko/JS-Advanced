function person(firstName, lastName) {
  let result = {
    firstName,
    lastName,
  };

  Object.defineProperty(result, "fullName", {
    enumerable: true,
    configurable: true,
    get() {
      return `${result.firstName} ${result.lastName}`;
    },
    set(value) {
      [result.firstName, result.lastName] = value.split(" ");
    },
  });

  return result;
}

let newPerson = person("John", "Wick");

console.log(newPerson);
console.log(newPerson.fullName);

newPerson.lastName = "Snow";
console.log(newPerson.fullName);

newPerson.fullName = "Johnny Bravo";
console.log(newPerson);
