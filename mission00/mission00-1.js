function getValueAtObject(obj, key) {
  if(!Object.prototype.hasOwnProperty.call(obj, key)) {
    throw new Error('객체에 해당 key가 존재하지 않습니다.');
  } else {
    return obj[key];
  }
}

const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland'
};

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age'));  // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
console.log(getValueAtObject(person, 'country')); // Error !