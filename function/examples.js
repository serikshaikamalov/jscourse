let arr = [1, 2, 3, 4, 5];

const filter = (arr, callback) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (callback(element)) {
      result.push(element);
    }
  }

  return result;
};

let filteredArray = filter(arr, (x) => {
  return x > 4;
});

console.log("Filtered Array: ", filteredArray);
