let button = document.getElementById("btn");
//addEventListener is used to add events in the selected element.
button.addEventListener("click", function () {
  //alert("I was clicked. Yayy!!!")
  document.querySelector(".box").innerHTML =
    "<b>Yayy, You were clicked.</b> Enjoy your click";
});

button.addEventListener("dblclick", function () {
  alert("Double Click Yayy!!!");
});

button.addEventListener("contextmenu", () => {
  alert("right clicked. Yayy!!!");
});

document.addEventListener("keydown", (e) => {//keydown returns what btn we press on the keyboard
  console.log(e.key, e.keyCode);
});


