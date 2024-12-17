//Selecting by Classes:-
/*let boxes=document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor="green"*/



//Selecting by Ids:-
/*let boxes=document.getElementById("pinkbox")
boxes.style.backgroundColor="pink"*/
//another method
/*let boxes=document.getElementById("pinkbox").style.backgroundColor="pink"*/



//Query Selector:-
//document.querySelector(".box").style.backgroundColor="aqua" //it selects only the first element it get first
//document.querySelectorAll(".box").style.backgroundColor="aqua" //it doesn't work because it returns Node List
//document.querySelectorAll(".box") //it returns Node List which contains the class '.box'
//So to select all elements using Query Selector:-
//we have to iterate Node List using for loop
/*document.querySelectorAll(".box").forEach(e=>{
    console.log(e); //prints all elements which have class '.box'
    e.style.backgroundColor="aqua"
})*/



//Selecting by Tags Name:-
/*let tags=document.getElementsByTagName("div")
console.log(tags);*/ // it returns HTML Collection



//Selecting by Name:-
//document.getElementsByName("Hriday").style.backgroundColor="aqua" //it doesn't work because getElementByName returns Node List
/*let elements = document.getElementsByName("Hriday");

// Check if any elements were found
if (elements.length > 0) {
    // Change the background color of the first element
    elements[0].style.backgroundColor = "aqua";
}*/



//matches, closest and contains methods(these commands are used in console):-
//matches:-to check if element matches the given CSS Selector
//closest:-to look for the nearest anchester that matches the given CSS Selector.The element itself is also checked
//contains:-returns true if element Bis inside element A (A Descendent of element A) or when element A == element B
let boxes=document.getElementsByClassName("box")
console.log(boxes[2].matches("#pinkbox")); //returns true
console.log(boxes[3].matches("#pinkbox")); //returns false 
console.log(boxes[3].closest("#pinkbox")); //returns null 
console.log(boxes[3].closest(".container")); //returns  div.container
console.log(boxes[3].closest("html")); //returns html
const mybox = document.getElementById("mybox"); //fix this code...
console.log(document.getElementById("myDIV").contains(mybox))







