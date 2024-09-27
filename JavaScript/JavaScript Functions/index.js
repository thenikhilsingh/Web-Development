// console.log("Hey harry you are nice!")
// console.log("Hey harry you are good!")
// console.log("Hey harry your tshirt is nice!")
// console.log("Hey harry your cource is good too!")

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your cource is good too!")
}
nice("harry")
nice("hriday")

function sum(a,b,c=3) {
   return a+b+c
}
result1=sum(3,5)
result2=sum(7,5)
result3=sum(3,13,1)
console.log("the sum of these number is:",result1)
console.log("the sum of these number is:",result2)
console.log("the sum of these number is:",result3)