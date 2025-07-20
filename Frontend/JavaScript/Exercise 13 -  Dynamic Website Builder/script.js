function createCard(title, channelName, views, monthsOld, duration) {
  let details = document.getElementById("details");
  let cTitle = document.createElement("h1");
  details.append(cTitle);
  cTitle.innerText = `${title}`;
  cTitle.style.cssText = "margin:0px; font-family:Arial;";

  let subCont = document.createElement("div");
  details.append(subCont);
  subCont.style.cssText = "color:grey;";

  let unorderedlist = document.createElement("ul");
  let item1 = document.createElement("li");
  let item2 = document.createElement("li");
  let item3 = document.createElement("li");
  unorderedlist.append(item1);
  unorderedlist.append(item2);
  unorderedlist.append(item3);
  subCont.append(unorderedlist);

  unorderedlist.style.cssText ="display:flex;column-gap:30px;padding:0px;font-family:Arial";
  item1.innerText = `${channelName}`;
  item1.style.cssText = "list-Style:none;";
  item2.innerText = `${views}`;
  item3.innerText = `${monthsOld}`;

  let cDuration = document.getElementById("videoDuration");
  cDuration.innerText = `${duration}`;
}

createCard("Introduction to Backend | Sigma Web Dev Video #2","CodeWithHarry","560k","7 months old","31:22");
