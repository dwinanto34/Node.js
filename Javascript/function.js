
// Functions
function printUserDetailFunc(username, age) {
    return (
      "My name is " + username + 
      ", and I am " + age + " years old"
    )
}

console.log(printUserDetailFunc("Bob", 20))

// Arrow functions (use anonymous function) -- WAY 1
const printUserDetailArrowFunc = function(username, age) {
  return (
    "My name is " + username + 
    ", and I am " + age + " years old"
  )
}

console.log(printUserDetailArrowFunc("Alice", 25))

// Arrow functions (use anonymous function) -- WAY 2
const anotherPrintUserDetailArrowFunc = (username, age) => {
  return (
    "My name is " + username + 
    ", and I am " + age + " years old"
  )
}

console.log(anotherPrintUserDetailArrowFunc("Patrick", 21))

// Arrow functions (for one statement) -- WAY 3
const anotherPrintUserDetailSingleLinerFunc = (username, age) => "My name is " + username + ", and I am " + age + " years old"

console.log(anotherPrintUserDetailArrowFunc("John", 35))
