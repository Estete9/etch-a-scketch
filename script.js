let divContent = document.querySelector(".content");
createGrid();
let newGridBtn = document.querySelector("#newGrid");
newGridBtn.addEventListener("click", newGrid);

function createGrid(x = 16) {
  for (i = 0; i < x; i++) {
    let divC = document.createElement("div");
    divC.style.flexGrow = "1";
    divC.style.display = "flex";

    divC.classList.add(`column${i}`);
    divContent.appendChild(divC);
    for (j = 0; j < x; j++) {
      let divR = document.createElement("div");
      //   divR.textContent = `divJ${j}`;
      divR.style.border = "1px solid black";
      divR.style.flexDirection = "column";
      divR.style.flexGrow = "1";
      divR.classList.add(`row${i}`);
      divR.classList.add("cell");
      divC.appendChild(divR);
    }
  }
  changeColorOnMouseOver();
}

function changeColorOnMouseOver() {
  let cells = Array.from(document.querySelectorAll(".cell"));
  //   console.log(cells);
  cells.forEach((cell) =>
    cell.addEventListener(
      "mouseover",
      () => (cell.style.backgroundColor = "black")
    )
  );
}

function newGrid() {
  let input = prompt("how many rows and columns do you want?", "16");
  //   this if doesn't work. TODO find a way to distinguish number from string
  if (!isNaN(input)) {
    if (input > 100) {
      alert("The grid is too big\ntry again");
      newGrid();
    }
    let removeChild = divContent.hasChildNodes;

    while (removeChild) {
      if (divContent.lastChild.id == "newGrid") {
        removeChild = false;
        continue;
      }
      divContent.removeChild(divContent.lastChild);
    }
    createGrid(input);
  } else {
    alert("incorrect input\ntry again");
    newGrid();
  }
}
