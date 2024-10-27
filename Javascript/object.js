
const person = {
  name: "Max",
  age: 31,
  greet() {
    console.log("Hi, my name is " + this.name + ", and I am " + this.age + " years old")
  }
}

console.log(person)
person.greet();

// destructuring
const printName = ({ name }) => {
  // will print person.name
  console.log(name)
}

printName(person)

const { name, age } = person;

// will print person.name
console.log(name)

// will print person.age
console.log(age)
