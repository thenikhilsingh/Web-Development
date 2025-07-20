// sessionStorage.setItem("name","Harry")
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")

window.onstorage = (e) => {
  alert("changed");
  console.log(e);
};

localStorage.setItem("name","Harry")
localStorage.setItem("name","Harry2")
