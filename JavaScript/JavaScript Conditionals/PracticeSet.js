//PracticeSet-1: Use logical operations to find whether the age of a person lies between 10 and 20.

let age = 20;

if (age < 10) {
    console.log("the age of the person is less than 10")
}
else if (age >= 10 || age <= 20) {
    console.log("the age of the person lies between 10 and 20")
}
else {
    console.log("the age of the person is grater than 20")
}

//PracticeSet-2: Demonstrate the use of a switch case statement in javascript.

let days = "sunday";

switch (days) {
    case "sunday":
        console.log("sunday is a valid day")
        break;

    case "monday":
        console.log("monday is a valid day")
        break;

    case "tuesday":
        console.log("tuesday is a valid day")
        break;

    case "wednesday":
        console.log("wednesday is a valid day")
        break;

    case "thursday":
        console.log("thursday is a valid day")
        break;

    case "friday":
        console.log("friday is a valid day")
        break;

    case "saturday":
        console.log("saturday is a valid day")
        break;

    default:
        console.log("It is not a valid day")
        break;
}

//PracticeSet-3: write a javascript program to find whether a number is divisible by 2 and 3.

let num = 6;

if (num % 2 == 0 && num % 3 == 0) {
    console.log("the number is divisible by 2 and 3")
}
else {
    console.log("the number is  not divisible by 2 and 3")
}

//PracticeSet-4: write a javascript program to find whether a number is divisible by either 2 or 3.

let Num = 6;

if (num % 2 == 0 && num % 3 == 0) {
    console.log("the number is divisible by 2")
    console.log("the number is divisible by 3")
}
else if (Num % 2 == 0) {
    console.log("the number is divisible by 2")
}
else if (Num % 3 == 0) {
    console.log("the number is divisible by 3")
}
else {
    console.log("the number is not divisible by either 2 or 3")
}

//PracticeSet-5: Print Print "You can Drive" or "You can't Drive" based on age being greater than 18 using ternary operator.

let Age = 30;

console.log(Age > 18 ? "You can Drive" : "You can't Drive");