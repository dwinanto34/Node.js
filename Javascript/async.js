
// async and promises
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Response")
    }, 2000);
  });

  return promise;
}

function getData() {
  fetchData()
    .then(text => {
      console.log("1st async")
      console.log(text)
      return fetchData()
    })
    .then(text => {
      console.log("2nd async")
      console.log(text)
      return fetchData()
    })
    .then(text => {
      console.log("3rd async")
      console.log(text)
      return fetchData()
    })
    .then(text => {
      console.log(text)
    })
}

console.log("A")
console.log("B")

getData()
