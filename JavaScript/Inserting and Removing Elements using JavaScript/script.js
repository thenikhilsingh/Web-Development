/*
console.log(document.querySelector(".box").innerHTML); //innerHTML returns html of .box
console.log(document.querySelector(".container").innerHTML); //innerHTML returns html of .container
console.log(document.querySelector(".box").innerText); //innerText returns only text of .box
console.log(document.querySelector(".container").innerText); //innerText returns only text of .container
console.log(document.querySelector(".container").outerHTML); //outerHTML returns HTML with the element itself 
console.log(document.querySelector(".container").tagName);//tagname returns the name of the selected element( for this example it returns DIV)
console.log(document.querySelector(".container").nodeName);//nodeName returns the name of node of the selected node(for this example it returns DIV)
//Note:-tagName and nodeName are similar but tagName is only applicable on elements and nodeName is applicable on all elements, comment node, text node, etc.
console.log(document.querySelector(".container").textContent);//textContent returns the text content of the selected element.
document.querySelector(".container").hidden="true"//hidden is used to hide any element.
*/


/*
document.querySelector(".container").innerHTML="Hey I am Harry"//it changes the text of the .container
console.log(document.querySelector(".box").hasAttribute("style"));//hasAttribute returns true if the attribute is presented in the selected element
console.log(document.querySelector(".box").getAttribute("style"))//getAttribute returns what is present inside the attribute
console.log(document.querySelector(".box").setAttribute("style","display:inline"))//setAttribute is used to set the value of attribute.
console.log(document.querySelector(".box").attributes)//attributes is used to get the collection of all attributes
console.log(document.querySelector(".box").removeAttribute("style"))//removeAttribute is used to remove attribute from an element.
//fix the above attribute codes*/



/* if you write
document.designMode="on"
in console then you can do changes in any website.
*/
//console.log(document.querySelector(".box").dataset)//it returns data attributes created by 'data-'



/*let div=document.createElement("div")//createElement is used to create an element
div.innerHTML="I have been inserted <b>by Harry</b>"
div.setAttribute("class","created")
document.querySelector(".container").append(div) //append is used to add the element in the last of where you applied it.
//document.querySelector(".container").prepend(div) //prepend is used to add the element in the starting of where you applied it.
//document.querySelector(".container").before(div)  //before is used to add the element before of where you applied it
//document.querySelector(".container").after(div)  //before is used to add the element after of where you applied it
//document.querySelector(".container").replaceWith(div)  //replaceWith is used to replace the element in which you applied it*/



//insertAdjacentHTML/insertAdjacentText/insertAdjacentElement:-
//  These are method used to insrt HTML. The first parameteris a code word, specifying where to insert.
/*let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterbegin","<b>I am under the water. Please help me here too much raining......iuuuuoooooo</b>") //insert HTML into element at the begining
//cont.insertAdjacentHTML("afterend","<b>I am under the water. Please help me here too much raining......iuuuuoooooo</b>") //insert HTML immediately after element
//cont.insertAdjacentHTML("beforebegin","<b>I am under the water. Please help me here too much raining......iuuuuoooooo</b>") //insert HTML immediately before element
//cont.insertAdjacentHTML("beforeend","<b>I am under the water. Please help me here too much raining......iuuuuoooooo</b>") //insert HTML into element at the end*/



//document.querySelector(".box").remove()//remove() is used to remove a node.



/*console.log(document.querySelector(".container").classList);//classList returns the list of all the classes of the selected element
//console.log(document.querySelector(".container").className);//classList returns the name of all the classes of the selected element
document.querySelector(".container").classList.add("harry");//to add into classList
document.querySelector(".container").classList.remove("harry");//to add into classList
document.querySelector(".container").classList.toggle("red");//toggle means khula h to bnd kardo bnd h to kholdo*/


//setTimeout and setInterval





