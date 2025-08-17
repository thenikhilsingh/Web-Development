// Script to change headings' text on button click
document.addEventListener("DOMContentLoaded", function () {
  const mainHeading = document.getElementById("main-heading");
  const subHeadings = document.querySelectorAll(".sub-heading");
  const btn = document.getElementById("changeTextBtn");
  btn.addEventListener("click", function () {
    mainHeading.textContent = "Headings Changed!";
    subHeadings.forEach((el, idx) => {
      el.textContent = `Subheading Changed ${idx + 1}`;
    });
  });
});
