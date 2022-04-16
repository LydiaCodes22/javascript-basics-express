function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !(a || b);
}

function one(a, b) {
  if (a && b) {
    return false;
  }
  if (a || b) {
    return true;
  }
  return false;
}

function truthiness(a) {
  return !!a;
//  if(a){
//    return true
//   } else {
//     return false;
//  };
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  if (a % 2 === 0) {
    return false;
  }
  return true;
}

function isEven(a) {
  return (a % 2 === 0);
  // if (a % 2 === 0) {
  //   return true;
  // }
  // return false;
}

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a))
}
//I don't really understand this one - google was my friend

function startsWith(char, string) {
  return string.startsWith(char)
}

function containsVowels(string) {
  let pattern= /[aeiou]/i;
  return pattern.test(string);
}

function isLowerCase(string) {
  return string == string.toLowerCase();
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
