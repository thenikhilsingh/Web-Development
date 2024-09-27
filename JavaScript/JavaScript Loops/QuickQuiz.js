//QuickQuiz-1: Write a sample for loop of your choice.

let a = 6;
for (let i = 1; i < 11; i++) {
    console.log(a * i)
}

//QuickQuiz-2: write a sample program demonstrating the for-in loops.

let obj = {
    monument: "place",
    "Taj Mahal": "Agra",
    "India Gate": "Delhi",
    "Hawa Mahal": "Jaipur"
}
for (const key in obj) {
    console.log(key)
}

//QuickQuiz-3: write a sample program demonstrating the for-of loops.

for (const char of "hriday") {
    console.log(char)
}

//QuickQuiz-4: write a sample program demonstrating the while loops.
let i=1;
let A=6;
while (i<11) {
    console.log(A*i++)
}

//QuickQuiz-5: write a sample program demonstrating the do while loops.
let j=1;
let x=6;
do {
    console.log(x*j++)
} while (j<11);
