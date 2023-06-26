// input : thisIsATest
// output : This_Is_A_Test
const convertToSnake = (str) => {
  let strArr = str.split("");
  let snakeCase = [];
  snakeCase.push(strArr[0].toUpperCase());
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      snakeCase.push("_" + strArr[i]);
    } else {
      snakeCase.push(strArr[i]);
    }
  }
  return snakeCase.join("");
};

console.log(convertToSnake("thisIsATest"))

// input - [1, [2, 5], [3 , [4]]]
// output - [1,2,5, 3,4]

let flatArray = [];
const flattenArray = (arr) => {
  {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenArray(arr[i]);
      } else {
        flatArray.push(arr[i]);
      }
    }
  }
};

console.log(flattenArray([1, [2], [3 , [4]]]));


