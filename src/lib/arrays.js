const getNthElement = (index, array) => {
  console.log(index % array.length);
  return array[index % array.length];
};
//copied and pasted, couldn't work out alternative.

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const biggerArray = array.concat(element);
  return biggerArray;
};
// {
//   const biggerArray = array.slice()
//   biggerArray.push(element);
//   return biggerArray;
// };
//I took ages on this one, and came up with a longer solution before switching to concat - much simpler.

const removeNthElement = (index, array) => {
  return array.splice(index,1);
};

function numbersToStrings(numbers) {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  const upperCaseStrings = strings.map(a => a.toUpperCase());
  return upperCaseStrings;
};
function reverseWordsInArray(strings) {
  return strings.map(a => {
    return a
      .split('')
      .reverse()
      .join('');
  });
}

function onlyEven(numbers) {
  return numbers.filter(a => {
    return a % 2 === 0;
  });
}

const removeNthElement2 = (index, array) => {
 return array.slice(0,index).concat(array.slice(index + 1));
};
//OMG - just understood this! take a slice of the array up until the index, and combine it with a slice that is one after the index, returning a new array (as .slice does)

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
};
//Have vague understanding ish


const sumNumbers = numbers => {
  return numbers.reduce((t, n) => {return t+n});
};

const sortByLastLetter = strings => {
  function endComparator(a,b) {
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  }
  return strings.sort(endComparator);
};
//copied & pasted. couldn't work out alternative.

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
