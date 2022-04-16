const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

function hasProperty(property, object) {
  return object. hasOwnProperty (property);
}

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  let result = people.map(a => a.age);
  return result;
  //worked but don't understand how the function inside .map's brackets really works
};

const findByName = (name, people) => {
  return people.find(x => x.name === name);
};

const findHondas = cars => {
  return cars.filter(x => x.manufacturer === 'Honda');
};

const averageAge = people => {
  const listOfAges = people.map(a => a.age);
  const result = listOfAges.reduce((total, currentAmount)=>total+currentAmount);
  return result / listOfAges.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: (friendName) => `Hi ${friendName}, my name is ${name} and I am ${age}!`
  }
};
//needed help from a friend for this. THE BACK TICKS!!!! I was not knowing that it was back ticks, rather than '

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
