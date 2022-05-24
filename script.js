let divContent = document.querySelector(".content");
createGrid();

function createGrid() {
  // create grid of 16 x 16
  // make 2 loops, one for the rows and one for the columns
  //   in the first loop, create a div for containing the rows
  // in each second loop create a div, and change its display to flex so it adjusts one after the other
  // find a size so the grid is 16 x 16
  // append to de 'content' div

  for (i = 0; i < 16; i++) {
    let divRow = document.createElement("div");
    divRow.style.display = "flex";
    divContent.appendChild(divRow);
    for (j = 0; j < 16; j++) {
      let divSquare = document.createElement("div");
      divSquare.classList.add("square");
      divSquare.textContent = `$i: ${i} j: ${j}`;
      divSquare.style.display = "inline-block";
      divSquare.style.border = "2px solid black";
      divSquare.style.flex = "1 1 auto";
      divRow.appendChild(divSquare);
    }
  }
}
