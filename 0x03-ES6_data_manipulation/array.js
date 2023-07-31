const fruits = [];
fruits.push("banana", "apple", "peach");
fruits[4] = 'mango'
fruits[3] = 'Papaya'
console.log(fruits[4])
console.log(fruits.length);
console.log(Object.values(fruits))

const test = Object.values(fruits)

for (let i = 0; i < test.length; i++) {
    console.log(i ,':' , test[i])
}