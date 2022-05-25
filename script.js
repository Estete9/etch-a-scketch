let divContent = document.querySelector(".content");
createGrid();
mouseOver();

function createGrid() {
  for (i = 0; i < 16; i++) {
    let divC = document.createElement("div");
    divC.style.flexGrow = "1";
    divC.style.display = "flex";
    divC.style.flexDirection = "column";
    divC.classList.add(`column${i}`);
    divContent.appendChild(divC);
    for (j = 0; j < 16; j++) {
      let divR = document.createElement("div");
      //   divR.textContent = `divJ${j}`;
      divR.style.border = "1px solid black";
      divR.style.flexGrow = "1";
      divR.classList.add(`row${i}`);
      divR.classList.add("cell");
      divC.appendChild(divR);
    }
  }
}

function mouseOver() {
  let cells = Array.from(document.querySelectorAll(".cell"));
  console.log(cells);
  cells.forEach((cell) =>
    cell.addEventListener(
      "mouseover",
      () => (cell.style.backgroundColor = "black")
    )
  );
}

// function handleMouseOver(cell) {
//     cell.style.backgroundColor = "black"
// }
