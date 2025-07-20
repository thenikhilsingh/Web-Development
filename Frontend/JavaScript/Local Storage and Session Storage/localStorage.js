let key = prompt("enter key you want to set");
let value = prompt("enter value you want to set");

localStorage.setItem(key, value); //it is used to set the items at loacalstorage
console.log(`The value at ${key} is ${localStorage.getItem(key)} `); //it is used to get the value from key
if (key == "red" || key == "blue") {
  localStorage.removeItem(key);//it is used to remove items from localstorage
}

if (key==0) {
    localStorage.clear()//it is used to delete everything
}

// console.log(localStorage.key(1));//it is used to access keys throuh index

localStorage.one=1//we can store data like objects in localstorage
delete localStorage.one//it i sused to delete data stored like objects

// JSON.stringify(Object)->converts object to JSON strings
// JSON.parse(String)->converts strings to objects(must be a valid JSON)
