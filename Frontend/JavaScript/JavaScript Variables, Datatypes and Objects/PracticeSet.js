//PracticeSet-1: create a variable of type string and try to add a number to it.

let str = "50";
console.log(str)

//PracticeSet-2: use Typeof operator to find the datatype of the string in last question.

console.log(typeof str)

//PracticeSet-3: create a const object in javascript. can you change it to hold a number later?

const obj = {
    "Secret Code": "Sus"
}
console.log(obj)
obj["Secret Code"] = 600
console.log(obj)

//PracticeSet-4: try to add a new key to the const object in problem 3. Were you able to do it?

obj.job = "Detective"
console.log(obj)

//PracticeSet-5: write a js program to create a word-meaning dictionary of 5 words.

let dictionary = {
    Cloudy: "बादलगृहीत",
    Rainy: "बरसाती",
    Snowy: "बर्फ के साथ",
    Sunny: "धूप वाला",
    Windy: "हवादार",
}
console.log(dictionary)
