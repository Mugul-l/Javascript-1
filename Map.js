// Map is knon as for storing unique key value pairs  

const map= new Map();
map.set('name',"Smruti")
map.set('age',"23")
map.set('Gender',"Female")
map.set('age',"21")             //age updated to 21 but not created again
console.log(map);

// Loop - Map

for (const key of map) {
    console.log(key);           //It will print every key value pairs
}

//Way to access onle key/value/both

for (const [key, value] of map) {
    console.log(key);               //Only prints the key values
}
for (const [key, value] of map) {
    console.log(value);             //Only prints the values of value
}
for (const [key, value] of map) {
    console.log(key + ":-" + value);    // Both
}

//All this format will not work for objects