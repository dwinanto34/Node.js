
const hobbies = ["Cooking", "Sports"]

for (let hobby of hobbies) {
  console.log("FOR " + hobby)
}

hobbies.forEach(hobby => console.log("FOR EACH " + hobby))

// copy arrays
const copiedHobbies = [...hobbies]
copiedHobbies.forEach(hobby => console.log("COPIED " + hobby))

// rest operators
const toArray = (...args) => {
  return args
}

console.log(toArray("Hello", "World"))

// destructuring
const [hobby1, hobby2] = hobbies;

// will print hobbies index 0
console.log(hobby1)

// will print hobbies index 1
console.log(hobby2)
