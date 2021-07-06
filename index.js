"strict mode";

const tapestryRow = document.getElementById("tapestry-row");
const tapestryButton = document.getElementById("tapestry-button");

const displayTapestry = function () {
  if ((tapestryRow.style.visibility = "hidden")) {
    tapestryRow.style.visibility = "visible";
  } else if ((tapestryRow.style.visibility = "visible")) {
    tapestryRow.style.visibility = "hidden";
  }
};

tapestryButton.addEventListener("click", displayTapestry);
