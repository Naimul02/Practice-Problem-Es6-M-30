// write an arrow function that will take 3 parameters , will multiply the parameters and will return result
const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(1, 3, 2));


// Write the following sentence in three lines and print the result
const sentences = `
    I am a web Developer.
    I love to code .
    I love to eat biriyani.  
`;
// console.log(sentences);


// write an arrow function that will take 2 parameters : one parameter will come from you and the other parameter will be a default parameter.Add these two parameters and return the result
const sum = (num1, num2 = 0) => num1 + num2;
// console.log(sum(11));


// write an arrow function where it will do the following:
const friendsArr = (arr) => {
  const newArray = [];
  for (const frnd of arr) {
    if (frnd.length % 2 === 0) {
      newArray.push(frnd);
    }
  }
  return newArray;
};

// write an arrow function where it will do the following x power 2
const result = friendsArr(["akib", "nadim", "arafat", "naimulIslum"]);
console.log(result);

const avg = (numsOfArr) => {
  let sum = 0;
  for (const num of numsOfArr) {
    const square = num ** 2;
    sum = sum + square;
  }
  const avg = sum / numsOfArr.length;
  return avg;
};
const output = avg([1, 2, 3]);
console.log(output);


// write an arrow function where it will do the following
const maxNumber = (arr1, arr2) => {
  const newArray = [...arr1, ...arr2];
  const result = Math.max(...newArray);
  return result;
};
const array1 = [12, 24];
const array2 = [10, 22];

const out = maxNumber(array1, array2);
console.log(out);
