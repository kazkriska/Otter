const isUnique = (inputArray) => {
  // const x = [1, , 1, 4, , 1];

  return inputArray.every(
    (item) => inputArray.indexOf(item) === inputArray.lastIndexOf(item)
  );
};
const arr = [1, , , , , , , , , 10];
// console.log(isUnique(arr));
// console.log(new Set(arr));
const map = new Map();
map.set(1, 'id 1')
map.set(2, 'id 2')
map.set(3, 'id 3')
map.set(4, 'id 4')
map.set(5, 'id 5')
// console.log(map)

map.forEach(element => {
    console.log(element)
});